console.log('This is an example of blocking the main thread or the event loop')

export const exampleFunction = ()=>{
    setTimeout(()=>{
    console.log("Done at import file/module");
}, 50);
console.log('fast');
for (let i = 0; i <900000000; i++){}
console.log('slow');
}

