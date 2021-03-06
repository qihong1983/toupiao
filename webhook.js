var http = require('http'),
  exec = require('exec')

const PORT = 8089;

//aa
var deployServer = http.createServer(function(request, response) {

  if (request.url.search(/toupiao\/?$/i) > 0) {

    const PATH = '/root/node/expressdemo/toupiao';

    var commands = [
      'cd ' + PATH,
      'git pull origin HEAD'
    ].join(' && ')

    exec(commands, function(err, out, code) {
      if (err instanceof Error) {
        response.writeHead(500)
        response.end('Server Internal Error.')
        throw err
      }
      process.stderr.write(err)
      process.stdout.write(out)
      response.writeHead(200)
      response.end('Deploy Done.')

    })

  } else {

    response.writeHead(404)
    response.end('Not Found.')

  }
})

deployServer.listen(PORT)