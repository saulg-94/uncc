import {Buffer} from 'buffer';



// const memoryContainer = Buffer.alloc(4) // 4 bytes (32 bits)
// EXAMPLES of other methods of storing data memoryContainer.write... GO TO following link for more on all Buffer METHODS : https://nodejs.org/docs/latest/api/buffer.html



// EXAMPLE ---- EXAMPLE ---- EXAMPLE ---- EXAMPLE ----
// memoryContainer[3]

// memoryContainer[0] = 0xf4;
// memoryContainer[1] = 0x34;
// memoryContainer[2] = 0xb6;
// memoryContainer[3] = 0xff;


// console.log(memoryContainer);
// console.log(memoryContainer[0]);
// console.log(memoryContainer[1]);
// console.log(memoryContainer[2]);
// console.log(memoryContainer[3]);

// console.log(memoryContainer.toString('hex'));
// EXAMPLE ---- EXAMPLE ---- EXAMPLE ---- EXAMPLE ----

/*
// challenge DISPLAY the following // 0100 1000 0110 1001 0010 0001 // 3 bytes (24 bits)
const memoryContainer = Buffer.alloc(3) // 4 bytes (32 bits)

memoryContainer[0] = 0x48
memoryContainer[1] = 0x69;
memoryContainer[2] = 0x21;

// UTF-8 is specified below; if encoding not specified by default utf-8 is the encoding; check nodeJS docs for other encodings (spanish) : https://nodejs.org/docs/latest/api/buffer.html 
console.log(memoryContainer.toString('utf-8'));
*/

// const memoryContainer = Buffer.from("486921","hex");
// console.log(memoryContainer.toString());

// const memoryContainer = Buffer.from("Hi!","utf8");
// console.log(memoryContainer.toString());
const memoryContainer = Buffer.alloc(1)
memoryContainer[0] = 0x48
console.log(memoryContainer);
console.log(memoryContainer.toString());

/*
reference the nodeJS docs for more info on
 Buffer.alloc
 Buffer.allocUnsafe
 Buffer.allocUnsafeSlow
 Buffer.from
 Buffer.concat

 https://nodejs.org/docs/latest/api/buffer.html
*/
