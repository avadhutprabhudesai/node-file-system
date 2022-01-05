const fs = require('fs/promises');
/**
 * Statement:
 *
 * Given a file, remove all occurences of a file and write it back to the same file.
 * In case file does not exist or any error is thrown, log proper message to the console.
 *
 * regex to match for all console statements
 * /console\.([^)]+)\);/igm;
 */

(async function () {
  try {
    let data = await fs.readFile('src/use-cases/files/consoles.txt', 'utf-8');
    const regex = /console\.([^)]+)\);/gim;
    data = data.replaceAll(regex, '');
    console.log(data);
    await fs.writeFile('src/use-cases/files/consoles.txt', data);
  } catch (error) {
    console.error('Error occurred while trying to read consoles.txt');
  }
})();
