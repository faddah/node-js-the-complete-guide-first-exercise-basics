const http = require('http');

const routes = require('./routes');;

// function rqListener(req, res) { }

const server = http.createServer(routes.handler);

server.listen(3000, () => {
	const address = server.address();
	const protocol = 'http';
	const hostname = address.address === '::' ? '127.0.0.1' : address.address;
	const port = address.port;

	console.log(`Node.JS Server is up & running at ${protocol}://${hostname}:${port}.`);
});