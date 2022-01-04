const fs = require('fs/promises');

/*
 * append
 *      a
 *      ax
 *      a+
 *      ax+
 * */

(async function () {
  var data;
  try {
    data = await fs.open('src/modes/append-txt.txt', 'a');
    await fs.open('src/modes/w.txt', 'a');
    console.log('\n\nfs.open() with a flag');
    console.log(data);

    await fs.appendFile(data, 'Some content');
  } catch (error) {
    console.error('\n\nError while opening a file with a flag');
  }

  try {
    data = await fs.open('src/modes/append-txt.txt', 'a+');
    data = await fs.open('src/modes/a+.txt', 'a+');
    console.log('\n\nfs.open() with a+ flag');
    console.log(data);
  } catch (error) {
    console.error('\n\nError while opening a file with a+ flag');
  }

  try {
    data = await fs.open('src/modes/append-txt.txt', 'ax');
  } catch (error) {
    console.error('\n\nError while opening a file with ax flag');
  }
  try {
    data = await fs.open('src/modes/ax.txt', 'ax');
    console.log('\n\nfs.open() with ax flag');
    console.log(data);
  } catch (error) {
    console.error('\n\nError while opening a file with ax flag');
  }
})();
