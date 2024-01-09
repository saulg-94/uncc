import fs from "fs/promises";

(async () => {
  // for more info on fs module (file-system module) go to : https://nodejs.org/docs/latest/api/fs.html#class-filehandle
  /*
A <FileHandle> object is an object wrapper for a numeric file descriptor.

Instances of the <FileHandle> object ARE CREATED BY the  fsPromises.open()  method.

All <FileHandle> objects are <EventEmitter>s.
*/

  // commands
  const CREATE_FILE = "create a file";
  const DELETE_FILE = "delete the file";
  const RENAME_FILE = "rename the file";
  const ADD_TO_FILE = "add to the file";

  const createFile = async (path) => {
    try {
      // we want to check whether or not we already have that file
      const existingFileHandle = await fs.open(path, "r");
      existingFileHandle.close();
      // we already have that file...
      return console.log(`The file ${path} already exists.`);
    } catch (err) {
      // we don't have the file, now we should creat
      const newFileHandle = await fs.open(path, "w");
      console.log("new file was successfully created!");
      newFileHandle.close();
    }
  };

  const deleteFile = async (path)=>{
    try {
        console.log(`Deleting ${path}`);
    } catch (error) {
        console.log(error);
        
    }
  }

  const renameFile = async (oldPath, newPath)=>{
    try {
        console.log(`Renaming ${oldPath} to ${newPath}`);
    } catch (error) {
        console.log(error);
    }
  }

  const addToFile = async (path, content)=>{
    try {
        console.log(`Adding to ${path}`);
        console.log(`Content: ${content}`);
    } catch (error) {
        console.log(error);
    }
  }

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
    await commandFileHandler.read(buff, offset, length, position);
    const command = buff.toString("utf-8");

    // create a file:
    // create a file <path>
    if (command.includes(CREATE_FILE)) {
      const filePath = command.substring(CREATE_FILE.length + 1);
      createFile(filePath);
    }

    // delete a file
    // delete the file <path>
    if (command.includes(DELETE_FILE)) {
      const filePath = command.substring(DELETE_FILE.length + 1);
      deleteFile(filePath);
    }

    // rename file:
    // rename the file <path> to <new-path>
    if (command.includes(RENAME_FILE)){
        const _idx = command.indexOf(" to ");
        const oldFilePath = command.substring(RENAME_FILE.length + 1, _idx );
        const newFilePath = command.substring(_idx + 4)

        renameFile(oldFilePath,newFilePath)
    }

    // add to file:
    // add to the file <path> this content: <content>
    if (command.includes(ADD_TO_FILE)){
        const _idx = command.indexOf(" this content: ");
        const filePath = command.substring(RENAME_FILE.length + 1, _idx)
        const content = command.substring(_idx + 15)

        addToFile(filePath, content)
    }


  });

  // watcher
  const watcher = fs.watch("./command.txt");

  for await (const event of watcher) {
    if (event.eventType === "change") {
      commandFileHandler.emit("change");
    }
  }
})();
