/* jshint esversion: 6 */

const path = require('path');

// Path with file name
// console.log(__filename);

// Base file name
// console.log(path.basename(__filename));

// Directory name.
console.log(path.dirname(__filename));

// Get File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));
