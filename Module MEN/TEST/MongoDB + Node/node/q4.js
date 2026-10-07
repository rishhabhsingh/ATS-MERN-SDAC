const os = require("os")

console.log("Home Directory", os.homedir());
console.log("OS Type", os.type());
console.log("Hostname:", os.hostname())
console.log("Free Memory:", os.freemem(), "bytes")
console.log("System Uptime:", os.uptime(), "seconds")
