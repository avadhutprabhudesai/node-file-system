const fs = require('fs/promises');

async function main() {
  try {
    const f1 = await fs.readFile('src/file1.txt');
    console.log('\n\nasync await used with fs.readFile()');
    console.log(f1.toString());
    console.log('\n');
  } catch (error) {
    console.log('\n\n catch block of async await');
  }
}

main();
