const { format } = require("date-fns")
const path = require("path")
const fs = require("fs")
const fsPromises = require("fs/promises")

const logEvents = async (message) => {
    const logTime = `${format(new Date, "yyyyMMdd\tHH:mm:ss")}`
    const logItem = `${logTime}\t${crypto.randomUUID()}\t${message}`
    console.log(logItem, "\n", logTime);

   try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
        fsPromises.mkdir(path.join(__dirname, "logs"))
    }
    await fsPromises.appendFile(path.join(__dirname, "logs", "eventLog.txt"), logItem + "\n")
   } catch (error) {
    console.log(error)
    process.exit(1)
   }
}

module.exports = logEvents