const http = require("http")
const path = require("path")
const fs = require("fs")
const fsPromises = require("fs/promises")
// Files for Event Logger
const logEvents = require("./eventLogger")
const Emmitter = require("events")

// Event Emmiter
class EventEmmitter extends Emmitter {}

const newEmmitter = new EventEmmitter()

newEmmitter.on("log", msg => {
  logEvents(msg)
})

newEmmitter.emit("log", "New log here!")

const server = http.createServer((req, res) => {
  console.log(req.url, req.method)
})


server.listen(5000, () => {
  console.log(`Server running on port 5000...`)
})
