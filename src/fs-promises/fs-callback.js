const fs = require('fs');

fs.readFile('src/file1.txt', (err, data) => {
  console.log('\n\nCallback style fs.readFile()');
  console.log(data.toString());
  console.log('\n');
});
