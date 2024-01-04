//import { exampleFunction } from "./history/example-ofBlocking-mainThreadOReventLoop.js";
import EventEmitter from "events"

console.log('Starting point...')
// console.log(EventEmitter);

class Emitter extends EventEmitter{}

const myE = new Emitter();

myE.on("foo",()=>{
    console.log("an event occured");
    console.log('more things can happen here');
})
console.log('first: before the FOO');
myE.emit("foo")
console.log('second: after FOO excutes');