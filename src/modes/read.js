const fs = require('fs/promises');
/**
 * read
 *      r: only read, exception if does not exist
 *      r+: read + write, exception if does not exist
 */

//read
(async function () {
  var data;
  try {
    data = await fs.open('src/modes/read.txt', 'r');
    console.log('\n\nfs.open() with r flag');
    console.log(data);
  } catch (error) {
    console.error('\n\nError while opening a file with r flag');
  }
  try {
    data = await fs.open('nonexistent.txt', 'r');
    console.log('\n\nfs.open() with r flag');
    console.log(data);
  } catch (error) {
    console.error('\n\nError while opening non existent file with r flag');
  }
})();
