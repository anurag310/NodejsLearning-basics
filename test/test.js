// import * as fs from 'fs';
// const add = fs.writeFileSync('MyFile.txt',"Add some more data to existing file 123");
// console.log("Added");

// // const read = fs.readFileSync('MyFile.txt');
// // console.log('Read',read.toString())

// // const update = fs.appendFileSync('MyFile.txt','\nUsing append command to change the data of the file ');
// // console.log('Update');


// const read = fs.readFileSync('MyFile.txt');
// console.log('Read',read.toString())


// const rename = fs.renameSync('MyFile.txt','demo.txt');

// console.log('Successfully rename');


// // const del = fs.unlinkSync('demo.txt');
// // console.log("Deleted Successfully!!")


import * as fs from 'fs';


const fileCreate = fs.writeFileSync('test.txt','THis is a test file')


const updateFile = fs.appendFileSync('test.txt','Which is used to test the Sync fs')
console.log("Synchronous read method:");
const read = fs.readFileSync('test.txt');
console.log("Data in the file is - " + read.toString());