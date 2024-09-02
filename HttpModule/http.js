import * as http from 'http';
import * as fs from 'fs';
const httpss = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h4>The Request made by using CreateServer</h4>');
    } else if (req.url == '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h4>The Request made by using contact</h4>');
    } 
    else if (req.url == '/api/user') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        fs.readFile(`jsonData.json`,'utf-8',(err,data)=>{
        //console.log(data);
        //const objData = JSON.parse(data);
        res.end(data);
       });
    }else {
        // Handle other routes or return a 404 Not Found response
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h5><i>Not Found,Page not Found<i><h5>');
    }
});

httpss.listen(3456, () => {
    console.log("Server is running");
});

// import http from 'node:http';

// // Create a local server to receive data from
// const server = http.createServer();

// // Listen to the request event
// server.on('request', (request, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Hello World!',
//   }));
// });

// server.listen(8000);