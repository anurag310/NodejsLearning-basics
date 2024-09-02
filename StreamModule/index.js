import * as fs from 'fs';
import * as http from 'http';


///////////            PIPE
//       Stream.pipe() the method used to take a readable stream and connect it to writable stream

const server = http.createServer();
server.on('request',(req,res)=>{
    // fs.readFile('input.txt',(err,data)=>{
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // })

    const rStream = fs.createReadStream('input.txt');

    // 1st way
    // rStream.on('data',(chunkData)=>{
    //     res.write(chunkData);

    // });
    // rStream.on('end',()=>{
    //     res.end();
    // });
    // rStream.on('error',(err)=>{
    //     res.end("File Not Found",err);
    // });

    //2nd way
    rStream.pipe(res)
})

server.listen(7887,()=>{
    console.log("Server is listen to 7887")
})

