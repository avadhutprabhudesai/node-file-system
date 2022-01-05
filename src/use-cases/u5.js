const fs = require('fs/promises');
/**
 * Statement
 * 
 * Write a function which accepts a directory, file and a content string and
        1. Check if directory exists, else create one
        2. If exits then check if it has a file, else create one
        3. If exists, append the content at the end
 * 
 * 
 */
async function createFile(dir, file, content) {
  try {
    await fs.readdir(dir);
  } catch (error) {
    console.error('\n\ncreateFile() -> Error while reading the directory');
    if (error.code === 'ENOENT') {
      await fs.mkdir(dir, { recursive: true });
    }
  }
  try {
    fs.appendFile(`${dir}/${file}`, content);
  } catch (error) {
    console.error('\n\ncreateFile() -> Error while writing content to a file');
    console.error(error);
  }
}

createFile('src/use-cases/example', 'sample.txt', 'Another message');
