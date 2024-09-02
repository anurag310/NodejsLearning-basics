//const fs = require('fs');

import * as fs from 'fs';   // Remove type from package .json
//const a1 = fs.writeFileSync('demo.txt',"This is data to be in file");
const a2 = fs.writeFileSync('demo.txt',"Welcome to Node Learning",(err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 

fs.appendFileSync("demo.txt"," Hope you enjoy your Learning!!!!");


const content = fs.readFileSync("demo.txt");
console.log(`The data of file demo is ::::: ${content.toString()}`)

// RENAME FILE

const change = fs.renameSync('demo.txt','filesystem.txt');


////////      Strigingfy convert object to json
///////       parse convert json to object