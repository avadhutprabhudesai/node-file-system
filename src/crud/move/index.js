const fs = require('fs');
const fsp = require('fs/promises');
/**
 * fs.rename()
 *
 */

(async function () {
  try {
    await fsp.rename('src/old/file.txt', 'src/new/file.txt');
    console.log('\n\nfs.rename()');
    console.log('File moved successfully');
  } catch (error) {
    console.log('\n\nError in moving the file');
  }
})();

setTimeout(() => {
  fs.rename('src/new/file.txt', 'src/old/file.txt', (err) => {
    if (err) {
      console.log('\n\nError in moving the file');
    } else {
      console.log('\n\nfs.rename()');
      console.log('File moved successfully');
    }
  });
}, 5000);
