/* jshint esversion: 6 */

const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
//   if(err) {
//     throw err;
//   }
//   console.log('Folder created');
// });

// Create and write to file
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello World', (err) => {
//   if(err) {
//     throw err;
//   }
//   console.log('File created and written to');
//
//   // Append information to the file
//   fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), ' I love Node.js and writing javascript', (err) => {
//     if(err) {
//       throw err;
//     }
//     console.log('File created and written to');
//   });
// });

// Read from a File
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//   if(err) {
//     throw err;
//   }
//   console.log(data);
// });

// Rename File
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
  if(err) {
    throw err;
  }
  console.log('File name changed...');
});
