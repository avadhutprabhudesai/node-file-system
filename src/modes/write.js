const fs = require('fs/promises');
/*
 * write
 *      w: open for write, create if does not exist, truncate if exists
 *      wx: same as w but fails if exists
 *      w+: same as w, also for read
 *      wx+: same as wx, also for read
 * */
(async function () {
  var data;
  try {
    data = await fs.open('src/modes/write.txt', 'w');
    await fs.open('src/modes/w.txt', 'w');
    console.log('\n\nfs.open() with w flag');
    console.log(data);

    await fs.writeFile(data, 'Some content');
  } catch (error) {
    console.error('\n\nError while opening a file with w flag');
  }

  try {
    data = await fs.open('src/modes/write.txt', 'w+');
    data = await fs.open('src/modes/w+.txt', 'w+');
    console.log('\n\nfs.open() with w+ flag');
    console.log(data);
  } catch (error) {
    console.error('\n\nError while opening a file with w+ flag');
  }

  try {
    data = await fs.open('src/modes/write.txt', 'wx');
  } catch (error) {
    console.error('\n\nError while opening a file with wx flag');
  }
  try {
    data = await fs.open('src/modes/wx.txt', 'wx');
    console.log('\n\nfs.open() with wx flag');
    console.log(data);
  } catch (error) {
    console.error('\n\nError while opening a file with wx flag');
  }
})();
