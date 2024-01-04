//import { exampleFunction } from "./history/example-ofBlocking-mainThreadOReventLoop.js";
import EventEmitter from "events"

console.log('Starting point...')
// console.log(EventEmitter);

class Emitter extends EventEmitter{}

const myE = new Emitter();

myE.on("foo",()=>{
    
    console.log(1);
   
})

myE.on("foo",(x)=>{
    
    console.log(x);
   
})

console.log(2);


myE.emit("foo", 'bar')
console.log(3);