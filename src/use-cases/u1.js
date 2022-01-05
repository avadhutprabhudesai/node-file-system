const fs = require('fs/promises');
/**
 * Statement:
 *
 * Given an array of file names, read the contents of each file and concatenate it in an output file called 'collated.txt'
 * If a file from an array does not exist or node is not able to read the content of it for some reason, skip it.
 * However, the contents should be collated in the same order in which files are indexed in the array
 */
(async function () {
  const files = [
    'src/use-cases/files/file1.txt',
    'src/use-cases/files/file2.txt',
    'src/use-cases/files/file3.txt',
    'src/use-cases/files/file4.txt',
  ];

  Promise.allSettled(files.map((file) => fs.readFile(file, 'utf-8'))).then(
    async (result) => {
      console.log(result);
      const concatenatedData = result
        .filter((r) => r.status === 'fulfilled')
        .map((r) => r.value)
        .join();

      console.log(concatenatedData);

      await fs.writeFile('src/use-cases/files/collated.txt', concatenatedData);
    }
  );
})();
