const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/' && req.method === 'GET'){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Home Page');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page Not Found');
  }
});

server.listen(3000, () => console.log('Server running at http://localhost:3000'));