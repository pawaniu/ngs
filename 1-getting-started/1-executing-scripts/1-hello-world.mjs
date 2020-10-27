import http from 'http';

const server = http.createServer((req, res) => {
  res.end('Hello World Ecma script\n');
});

server.listen(4242, () => {
  console.log('Server is running...');
});
