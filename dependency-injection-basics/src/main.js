// Create/Setup server
import { createServer } from 'http'
const server = createServer()

// Create a new logger
import { createFileLogger } from './logger/fileLogger.js'
const log = createFileLogger("./server.log")

// Some static server options
const hostname = "localhost"
const address = 30000

server.addListener("request", (request, response) => {
  log.info(`${request.method} Request for resources: "${request.url}"`)

  // Request to non existing resource
  if(request.url === "/favicon.ico") {
    response.statusCode = 404
    response.end(() => log.warning(`Invalid resource requested: "${request.url}"`))
    return
  }

  // Mocking an internal server error
  if(request.url === "/error") {
    response.statusCode = 505
    response.end(() => log.error(`Invalid resource requested: "${request.url}"`))
    return
  }

  // Serve our ok response
  response.statusCode = 200
  response.setHeader("Content-Type", "text/html")

  response.write(`<h1>Welcome ${request.headers.host}</h1>`, (error) => {
    if(!error === undefined) log.error(`Oh noes we got us some error: ${error}`)
  })

  response.end(() => log.info("New message sent"))
})

server.listen({host: hostname, port: address}, () => {
  log.info(`Listening on http://${hostname}:${address}`)
})