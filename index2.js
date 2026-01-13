//========== path module in Node.js provides utilities for working with file and directory paths.======

// const path = require("path");
// const myPath = "F:\\Learning_Node_JS\\index2.js";

// console.log(path.basename(myPath)); // Output: index2.js
// console.log(path.dirname(myPath)); // Output: F:/Learning_Node_JS/test
// console.log(path.extname(myPath)); // Output: .js
// console.log(path.parse(myPath)); // Output: { root: 'F:/', dir: 'F:/Learning_Node_JS/test', base: 'index2.js', ext: '.js', name: 'index2' }

// there are so many other methods are available in path module like join, resolve, isAbsolute etc.

// ====== OS module in Node.js provides operating system-related utility methods and properties.======

// const os = require("os");

// console.log(os.arch()); // Output: x64
// console.log(os.platform()); // Output: win32
// console.log(os.cpus()); // Output: [ { model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz', speed: 1800, times: [Object] }, ... ]
// console.log(os.homedir()); // Output: C:\Users\YourUsername
// console.log(os.freemem()); // Output: 1234567890 (in bytes)
// console.log(os.totalmem()); // Output: 9876543210 (in bytes)

// ====== file system (fs) module in Node.js provides an API for interacting with the file system.======
const fs = require("fs");

// write file asynchronously
fs.writeFile("sample.txt", "This is a sample text file.", (err) => {
  if (err) {
    console.log("Error occurred:", err);
  } else {
    console.log("File written successfully!");
  }
});

console.log("File writing process started...");

// append data to a file asynchronously
fs.appendFile("sample.txt", "\nAppending some more text.", (err) => {
  if (err) {
    console.log("Error occurred while appending:", err);
  } else {
    console.log("Data appended successfully!");
  }
});
