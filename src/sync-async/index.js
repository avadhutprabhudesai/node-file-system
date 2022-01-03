const fs = require('fs');

/**
 * sync read vs async read
 */
console.log('fs.readFileSync');
const f1 = fs.readFileSync('src/sync-async/file1.txt', 'utf-8');
console.log(f1);
const f2 = fs.readFileSync('src/sync-async/file2.txt', 'utf-8');
console.log(f2);
const f3 = fs.readFileSync('src/sync-async/file3.txt', 'utf-8');
console.log(f3);
console.log('Next command after all sync calls to read files');

console.log('fs.readFile');
fs.readFile('src/sync-async/file1.txt', (err, data) => {
  console.log(data.toString());
});
fs.readFile('src/sync-async/file2.txt', (err, data) => {
  console.log(data.toString());
});
fs.readFile('src/sync-async/file3.txt', (err, data) => {
  console.log(data.toString());
});
console.log('Next command after all async calls to read files');
