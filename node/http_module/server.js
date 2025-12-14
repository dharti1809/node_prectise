// const http = require('http');

import http from 'http';

//server.emit
//server.on / server.addListener in a server
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        // req.setHeader('Content-Type', 'text/html');
        res.write("<h1> Hello, I'm Dharti. hii</h1>");
        res.end();
    }

    if(req.url === '/about'){
        res.write("i'm learning Node.js");
        res.end();
    }

    if(req.url === '/contact'){
        // req.setHeader('Content-Type', 'text/plain');
        res.write("Contact me on Linked In");
        res.end();
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});