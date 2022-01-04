const fs = require('fs');
const fsp = require('fs/promises');
/**
 * fs.read (without options)
 * fs.read (with options)
 * fs.readFile
 *
 */

// fs.read without options
(async function () {
  let handle = await fsp.open('src/file2.txt');
  fs.read(handle.fd, Buffer.alloc(20), 0, 20, 10, (err, bytes, buffer) => {
    if (err) {
      console.error(err);
    } else {
      console.log('\n\n Content read with fs.read() without options');
      console.log(buffer.toString());
    }
  });
})();

// fs.read with options
(async function () {
  let handle = await fsp.open('src/file2.txt');
  fs.read(
    handle.fd,
    {
      buffer: Buffer.alloc(20),
      offset: 0,
      length: 20,
      position: 10,
    },
    (err, bytes, buffer) => {
      if (err) {
        console.error(err);
      } else {
        console.log('\n\n Content read with fs.read() with options');
        console.log(buffer.toString());
      }
    }
  );
})();

(async function () {
  const data = await fsp.readFile('src/file2.txt', { encoding: 'utf-8' });
  console.log('\n\nfsp.readFile() data');
  console.log(data);
})();

fs.readFile('src/file2.txt', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log('\n\nfs.readFile() data');
    console.log(data.toString());
  }
});
