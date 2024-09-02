import * as os from 'os';

const freeMemory = os.freemem();
console.log('Free memory in my Computer in Bytes',freeMemory);
console.log('Free memory in my Computer in GB',freeMemory/1024/1024/1024);

const homeDir = os.homedir();
console.log('Homedir in my Computer',homeDir);

const hostname = os.hostname();
console.log('HostName in my Computer',hostname);

const arch = os.arch();
console.log('Arch in my Computer',arch);

const totalmem = os.totalmem();
console.log('Total memory in my Computer',totalmem);

const platform = os.platform();
console.log('Platform in my Computer',platform);

const tempdir = os.tmpdir();
console.log('tempdir in my Computer',tempdir);


const osType = os.type();
console.log('OsType in my Computer',osType);
