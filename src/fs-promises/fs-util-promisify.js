const fs = require('fs');
const util = require('util');

const promisifiedReadFile = util.promisify(fs.readFile);

promisifiedReadFile('src/file1.txt').then((data) => {
  console.log('\n\npromisifying callbacks of fs.readFile()');
  console.log(data.toString());
  console.log('\n');
});
