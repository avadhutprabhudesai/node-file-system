const fs = require('fs/promises');
const chokidar = require('chokidar');
/**
 * Statement
 *
 * Given a path to a log file,
 *      .Watch the log file for the changes
 *      .Pick up the changes to the file content and append it to a backup file.
 */

// (async function () {
//   try {
//     const watcher = fs.watch('src/use-cases/files/logs.txt');
//     for await (const event of watcher) {
//       if (event.eventType === 'change') {
//         let data = await fs.readFile('src/use-cases/files/logs.txt', 'utf-8');
//         const separatedLogs = data.split('[***]');
//         console.log(separatedLogs);
//       }
//     }
//   } catch (error) {
//     console.log('\n\nError occurred while watching a log file');
//   }
// })();

const watcher = chokidar.watch('src/use-cases/files/logs.txt');

watcher.on('change', async () => {
  let data = await fs.readFile('src/use-cases/files/logs.txt', 'utf-8');
  const lastEntry = data.split('[***]').pop();
  await fs.appendFile(
    'src/use-cases/files/backuplogs.txt',
    lastEntry.concat('\n')
  );
});
