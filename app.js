
import stream from "node:stream"
import fs from 'node:fs/promises'



(async () =>{
  console.time("app")
  const fileHandle = await fs.open("text.txt", "w")
  let something = '                Macro And Dante     are     POOPY _ HEADS _ !!               '
  for(let i = 0; i<100; i++){
    await fileHandle.write(`lets Gooo!!!!!!!!!!!!!  ${something}` )
  }
 console.timeEnd("app")
})()



// console.log(stream);


// let writable = new stream.Writable({
//   highWaterMark: 10
//   // decodeStrings: false
// })

// writable._write = (chunk, encoding, callback) => {
//   console.log(chunk.toString());
//   callback();
// };
// let written = writable.write(Buffer.alloc(10000, 'BUNCH OF POOPY HEADS            !!!!!       '));



// writable.end();
// console.log(written);
