import fs from "fs/promises";

(async () => {
  // for more info on fs module (file-system module) go to : https://nodejs.org/docs/latest/api/fs.html#class-filehandle
  /*
A <FileHandle> object is an object wrapper for a numeric file descriptor.

Instances of the <FileHandle> object ARE CREATED BY the  fsPromises.open()  method.

All <FileHandle> objects are <EventEmitter>s.
*/
  const commandFileHandler = await fs.open("./command.txt", "r");

  commandFileHandler.on("change", async () => {
    // get the size of our file
    const size = (await commandFileHandler.stat()).size;

    // allocate our buffer with the size of the file
    const buff = Buffer.alloc(size);

    // the location at which we want to start filling our buffer
    const offset = 0;
    // how many bytes we want to read
    const length = buff.byteLength;
    // the position that we want to start reading the file from
    const position = 0;

    // we always want to read the whole content (from the beginning to the end)
    const content = await commandFileHandler.read(
      buff,
      offset,
      length,
      position
    );
    console.log(content);
  });

  // watcher
  const watcher = fs.watch("./command.txt");

  for await (const event of watcher) {
    if (event.eventType === "change") {
      commandFileHandler.emit("change");
    }
  }
})();
