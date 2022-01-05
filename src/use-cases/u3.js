const path = require('path');
/**
 * Given an array of file paths,
 * Create a JS map object in which each entry corresponds to the file extension
 * and value corresponds to the array of file paths
 *
 */

(async function () {
  const files = [
    'src/use-cases/files/code.js',
    'src/use-cases/files/data.json',
    'src/use-cases/files/values.json',
    'src/use-cases/files/image.png',
    'src/use-cases/files/logo.svg',
  ];

  let classification = new Map();

  files.forEach((f) => {
    let ext = path.extname(f),
      files = [f];
    if (classification.has(ext)) {
      files = [...files, ...classification.get(ext)];
    }
    classification.set(ext, files);
  });

  for (const obj of classification) {
    console.log(obj);
  }
})();
