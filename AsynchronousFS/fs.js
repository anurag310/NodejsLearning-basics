import * as fs from 'fs';
const add = fs.writeFile('File.txt',"Add some more fghj data to existing file",()=>{
    console.log("New file created!!!");
});


const content = fs.readFile('File.txt','utf-8',(err,data)=>{
    console.log(data);
});


