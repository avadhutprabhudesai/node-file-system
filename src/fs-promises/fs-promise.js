const fs = require('fs/promises');

fs.readFile('src/file1.txt').then((data) => {
  console.log('\n\npromise of fs.readFile()');
  console.log(data.toString());
  console.log('\n');
});

fs.readFile('src/file11.txt').catch(() => {
  console.log('\n\ncatch block of promise of fs.readFile()');
  console.log('No such file');
  console.log('\n');
});
