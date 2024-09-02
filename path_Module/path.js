import * as path from 'path';

const pathname = path.dirname('D:\Node_Tut_Demo\Node_Learning\FileSystem\path_Module');
console.log(pathname)  // D:

const extname = path.extname('path.js');
console.log(extname)  // return extension of path

const pathFormat = path.parse('D:\Node_Tut_Demo\Node_Learning\FileSystem\path_Module');
console.log(pathFormat)