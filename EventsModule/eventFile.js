// var events = require('events');
import * as events from 'events';
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
// var connectHandler = function connected() {
//    // Fire the data_received event 
//    // eventEmitter.emit('data_received'); // create an event using emit function 
//    }


//Bind the connection event with the handler
//eventEmitter.on('connection', connectHandler);

eventEmitter.on('connection',function(){
   console.log('Anurag is calling');
})
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
   console.log('data received succesfully.');
});


eventEmitter.on('demoEmitter',()=>{
   console.log(3+3);
})
// Fire the connection event 
eventEmitter.emit('connection');
eventEmitter.emit('data_received'); 
eventEmitter.emit('demoEmitter');
console.log("Program Ended.");


eventEmitter.on('checkParameter',(sc,msg)=>{
   debugger
   console.log(`Status Code is ${sc} and the message is ${msg}`);
})

eventEmitter.emit('checkParameter',200,"Created");