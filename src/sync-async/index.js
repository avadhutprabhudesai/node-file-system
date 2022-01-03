const fs = require('fs');

/**
 * sync read vs async read
 */
console.log('\n\nfs.readFileSync\n');
const f1 = fs.readFileSync('src/file1.txt', 'utf-8');
console.log(f1);
const f2 = fs.readFileSync('src/file2.txt', 'utf-8');
console.log(f2);
const f3 = fs.readFileSync('src/file3.txt', 'utf-8');
console.log(f3);
console.log('After all sync calls to read files');

console.log('\n\nfs.readFile');
fs.readFile('src/file1.txt', (err, data) => {
  console.log(data.toString());
});
fs.readFile('src/file2.txt', (err, data) => {
  console.log(data.toString());
});
fs.readFile('src/file3.txt', (err, data) => {
  console.log(data.toString());
});
console.log('After all async calls to read files');
