const fs = require('fs');
const fsp = require('fs/promises');
const chalk = require('chalk');
/**
 *  Methods
 *      fs.open
 *      fs.read
 *      fs.write
 */

fs.open('src/file1.txt', 'r+', (err, fd) => {
  if (err) {
    console.log(chalk.red(err));
  }
  //   read the file. if the file is not empty then insert *** at the specified position
  fs.read(fd, Buffer.alloc(52), 0, 26, 0, (err, bytes, buffer) => {
    console.log(buffer.toString());
    if (buffer.length) {
      fs.write(fd, Buffer.from('***'), 0, 3, 5, () => {
        console.log('\n\nfs.read()');
        console.log('Written successfully');
      });
    }
    fs.close(fd);
  });
});

fsp.open('src/file1.txt', 'r').then(({ fd }) => {
  // Print the file stats
  fs.fstat(fd, (err, stat) => {
    if (err) {
      console.log(chalk.red(err));
    } else {
      console.log('\n\nfsp.open()');
      console.log(stat);
    }
  });
});
