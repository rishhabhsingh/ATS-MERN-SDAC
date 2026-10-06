const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url == '/') {
        res.end("Hello World");
    }
    if (req.url == '/about') {
        res.end("About Page");
    }   
    else {
        res.end("404 Page Not Found");
    }
})

module.exports = server;