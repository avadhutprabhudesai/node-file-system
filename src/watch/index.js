const fs = require('fs/promises');
/**
 * fs.watch
 */

(async function () {
  const watcher = await fs.watch('src/watch/filetowatch.txt');
  for await (const event of watcher) {
    console.log(event);
    if (event.eventType === 'change') {
      const data = await fs.readFile('src/watch/filetowatch.txt', 'utf-8');
      await fs.writeFile('src/watch/backup.txt', data);
    }
  }
})();
