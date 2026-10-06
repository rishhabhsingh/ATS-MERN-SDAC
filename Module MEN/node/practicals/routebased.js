const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let path = "./view/";
    switch (req.url) {
        case '/':
            path += 'index.html'
            break;
        case '/about':
            path += 'about.html'
            break;
        case '/contact':
            path += 'contact.html'
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
           console.log(err);
        }
        else{
            res.end = data;
        }
    })

})

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})