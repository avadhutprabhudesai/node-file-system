const fs = require('fs/promises');

(async function () {
  const stats = await fs.stat('src/meta-data/data.json');
  console.log('\n\nfs.stat()');
  console.log(stats);
  console.log('stats.isDirectory', stats.isDirectory());
  console.log('stats.isFile', stats.isFile());
  console.log('stats.size', stats.size);
})();
