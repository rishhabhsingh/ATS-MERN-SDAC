const os = require("os")

console.log("Hostname:", os.hostname())
console.log("Platform:", os.platform())
console.log("CPU Architecture:", os.arch())
console.log("Total Memory:", os.totalmem(), "bytes")
