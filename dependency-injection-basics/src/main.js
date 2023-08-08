import { createServer } from 'http'
const app = createServer()

import { createFileLogger } from './logger/fileLogger.js'
const log = createFileLogger("./server.log")


const hostname = "localhost"
const address = 30000


app.addListener("request", (request, response) => {
  log.info(`${request.method} Request for resources: "${request.url}"`)

  if(request.url === "/favicon.ico") {
    response.statusCode = 404
    response.end(() => {
      log.warning(`Invalid resource requested: "${request.url}"`)
    })
    return
  }

  if(request.url === "/error") {
    response.statusCode = 505
    response.end(() => {
      log.error(`Invalid resource requested: "${request.url}"`)
    })
    return
  }

  response.statusCode = 200
  response.setHeader("Content-Type", "text/html")

  response.write(`<h1>Welcome ${request.headers.host}</h1>`, (error) => {
    if(!error === undefined) {
      log.error(`Oh noes we got us some error: ${error}`)
    }

    log.info("Finished writing response")
  })

  response.end(() => {
    log.info("New message sent")
  })
})

app.listen({host: hostname, port: address}, () => {
  log.info(`Listening on http://${hostname}:${address}`)
})