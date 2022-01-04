const fs = require('fs');
const fsp = require('fs/promises');
/**
 * fs.access()
 *
 */

(async function () {
  try {
    await fsp.access('src/read-only.txt', fs.constants.R_OK);
    console.log('\n\nfsp.access()');
    console.log('file can be accessed for reading by the current process\n');
  } catch (error) {
    console.log('\nError in fsp.access()');
    console.log(error);
    console.log('\n');
  }
  try {
    await fsp.access('src/write-only.txt', fs.constants.R_OK);
  } catch (error) {
    console.error('\n\nError in fsp.access()');
    console.error(error);
    console.log('\n');
  }
})();

fs.access('src/write-only.txt', fs.constants.W_OK, (err) => {
  if (err) {
    console.error('\n\nError in fs.access()');
    console.error(err);
  } else {
    console.log('\n\nfs.access()');
    console.log('File can be accessed for writing by the current process\n');
  }
});
