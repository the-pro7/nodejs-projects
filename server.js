const http = require("http")
const path = require("path")
const fs = require("fs")
const fsPromises = require("fs/promises")

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-type": "text/html"})
  res.end("Hello)
})
