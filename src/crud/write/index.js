const fs = require('fs');
const fsp = require('fs/promises');
/**
 * fs.write with buffer
 * fs.write with string
 * fs.writeFile
 *
 */

(async function () {
  let handle = await fsp.open('src/file3.txt', 'w');

  fs.write(handle.fd, Buffer.from('Hello!'), 0, 6, 0, (err) => {
    if (err) {
      console.error('Error occured while writing to the file using fs.write()');
    } else {
      console.log('\n\nfs.write() using buffer');
      console.log('Content added successfully');
    }
  });
})();

(async function () {
  let handle = await fsp.open('src/file3.txt', 'w');

  let content = await fsp.readFile('src/file3.txt');

  fs.write(handle.fd, '\nHello World!', content.length, 'utf-8', (err) => {
    if (err) {
      console.error('Error occured while writing to the file using fs.write()');
    } else {
      console.log('\n\nfs.write() using buffer');
      console.log('Content added successfully');
    }
  });
})();
