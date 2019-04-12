/* jshint esversion: 6 */

const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized url
console.log(myUrl.href);

// Get host (root domain)
console.log(myUrl.host);

// Host name (does not get port)
console.log(myUrl.hostname);

// Path name.
console.log(myUrl.pathname);

// Serialized query (gets parameters)
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add params.
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through Params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
