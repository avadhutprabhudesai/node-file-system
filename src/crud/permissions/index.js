const fs = require('fs');
const fsp = require('fs/promises');
/**
 * fs.chmod()
 *
 */

(async function () {
  try {
    await fsp.chmod('src/crud/permissions/file.txt', fs.constants.S_IRUSR);
    await fsp.access('src/crud/permissions/file.txt', fs.constants.R_OK);
    // await fsp.chmod('src/crud/permissions/file.txt', fs.constants.S_IWUSR);
    // await fsp.access('src/crud/permissions/file.txt', fs.constants.W_OK);
    console.log('\n\nfsp.chmod()');
    console.log('file permissions can be modified by fsp.chmod\n');
  } catch (error) {
    console.log('\nError in fsp.chmod()');
    console.log(error);
    console.log('\n');
  }
})();
