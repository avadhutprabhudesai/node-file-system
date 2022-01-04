const fs = require('fs');
const fsp = require('fs/promises');
/**
 * fs.appendFile()
 *
 */

(async function () {
  await fsp.appendFile(
    'src/file3.txt',
    '\n***This data is appended with fs.appendFile()',
    { encoding: 'utf-8' }
  );
})();

fs.appendFile(
  'src/file3.txt',
  '\n***Append some more',
  { encoding: 'utf-8' },
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('\nfs.appendFile()');
      console.log('String appended with fs.appendFile()');
    }
  }
);
