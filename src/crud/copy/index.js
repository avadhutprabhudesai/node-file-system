const fs = require('fs');
const fsp = require('fs/promises');
/**
 * fs.copyFile()
 *
 */

(async function () {
  try {
    await fsp.copyFile('source.txt', 'destination.txt');
    console.log('\n\nfsp.copyFile()');
    console.log('file copied successfully');
  } catch (error) {
    console.error(error);
  }
})();

fs.copyFile('source.txt', 'destination.txt', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('\n\nfsp.copyFile()');
    console.log('file copied successfully');
  }
});
