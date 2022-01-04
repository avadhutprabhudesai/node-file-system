const fs = require('fs');
const fsp = require('fs/promises');
/**
 * fs.unlink()
 *
 */

fsp.writeFile('src/fileToRemove1.txt', '');

(async function () {
  try {
    await fsp.unlink('src/fileToRemove1.txt');
    console.log('\n\nfsp.unlink()');
    console.log('file removed successfully');
  } catch (error) {
    console.error(error);
  }
})();

fsp.writeFile('src/fileToRemove2.txt', '');
fs.unlink('src/fileToRemove2.txt', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('\n\nfsp.unlink()');
    console.log('file removed successfully');
  }
});
