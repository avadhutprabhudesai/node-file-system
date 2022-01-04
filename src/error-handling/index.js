const fs = require('fs/promises');
/**
 *  File does not exist in case of following operations
 *      readFile
 *      writeFile
 *      appendFile
 *      watchFile
 *      copyFile
 *
 *  Operand is a directory instead of a file
 *      readFile
 *      writeFile
 *      appendFile
 *      watchFile
 *      copyFile
 */
(async function () {
  try {
    await fs.readFile('nonexistent.txt');
  } catch (error) {
    console.error('\n\nError in readFile');
    console.error(error);
  }
  try {
    await fs.writeFile(
      'src/error-handling/writeFileNonExist.txt',
      'Content to write to non-existent file'
    );
  } catch (error) {
    console.error('\n\nError in writeFile');
    console.error(error);
  }
  try {
    await fs.appendFile(
      'src/error-handling/appendFileNonExist.txt',
      'Content to write to non-existent file'
    );
  } catch (error) {
    console.error('\n\nError in appendFile');
    console.error(error);
  }

  try {
    await fs.watch('src/error-handling/watchFileNonExist.txt');
  } catch (error) {
    console.error('\n\nError in watchFile');
    console.error(error);
  }

  try {
    await fs.copyFile(
      'src/error-handling/sourceFileNonExist.txt',
      'src/error-handling/destinationFileNonExist.txt'
    );
  } catch (error) {
    console.error('\n\nError in copyFile');
    console.error(error);
  }
})();

(async function () {
  try {
    await fs.readFile('src/error-handling/dir');
  } catch (error) {
    console.error('\n\nError in readFile');
    console.error(error);
  }
  try {
    await fs.writeFile(
      'src/error-handling/dir',
      'Content to write to non-existent file'
    );
  } catch (error) {
    console.error('\n\nError in writeFile');
    console.error(error);
  }
  try {
    await fs.appendFile(
      'src/error-handling/dir',
      'Content to write to non-existent file'
    );
  } catch (error) {
    console.error('\n\nError in appendFile');
    console.error(error);
  }

  try {
    await fs.watch('src/error-handling/dir');
  } catch (error) {
    console.error('\n\nError in watchFile');
    console.error(error);
  }

  try {
    await fs.copyFile(
      'src/error-handling/dir',
      'src/error-handling/another-dir'
    );
  } catch (error) {
    console.error('\n\nError in copyFile');
    console.error(error);
  }
})();
