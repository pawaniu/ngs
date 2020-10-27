const http = require('http');

const requestListener = (req, res) => {
    res.write("Hello World From long version........ \n");
    res.end();
};

const server = http.createServer();

server.on('request', requestListener);

server.listen(4242, () => {
    console.log("Server is running");
});

// use nodemon to autmatically reload file
// npm i -g nodemon