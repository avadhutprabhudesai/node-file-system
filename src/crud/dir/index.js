const fs = require('fs');
const fsp = require('fs/promises');

/**
 * fs.mkdir
 * fs.opendir
 * fs.readdir
 * fs.rmdir
 */

(async function () {
  try {
    await fsp.mkdir('temp/promises/mkdir', { recursive: true });
    await fsp.mkdir('src/crud/dir/tempdir/anotherdir', { recursive: true });
    console.log('\n\nfsp.mkdir()');
    console.log('directory created');
  } catch (error) {
    console.error('\n\nfsp.mkdir()');
    console.error('Error creating a directory with fsp.mkdir');
  }

  try {
    const dir = await fsp.opendir('src/crud/dir/tempdir');
    for await (const dirent of dir) {
      console.log('\ndir content: ', dirent);
    }
  } catch (error) {
    console.log('\n\nError in opendir');
  }

  try {
    const dir = await fsp.readdir('src/crud/dir/tempdir');
    for (const file of dir) {
      console.log('\nfiles: ', file);
    }
  } catch (error) {
    console.log('\n\nError in readdir');
  }

  try {
    await fsp.rmdir('src/crud/dir/tempdir/anotherdir');
    console.log('\n\nfsp.rmdir()');
    console.log('directory removed');
  } catch (error) {
    console.log('\n\nError in rmdir');
    console.error(error);
  }
})();
