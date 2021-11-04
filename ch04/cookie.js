const http = require('http');

http.createServer((req, res) => {
  console.log(req.url, req.headers.cookie);
  res.writeHead(200, { 'Set-Cookie' : 'my-cookie=test' });
  res.end('Hello Cookie');
}).listen(8083, () => {
  console.log('Server is listening on 8083');
});