const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url == '/') {
        res.end("Hello World");
    }  
    else {
        res.end("404 Page Not Found");
    }
})

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})