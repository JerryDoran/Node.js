/* jshint esversion: 6 */

const http = require('http');

// Create Server
http.createServer((req, res) => {
  res.write('Hello World');
  res.end();
}).listen(3000, () => console.log('Server is up and running'));
