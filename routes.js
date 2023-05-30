const fs = require('fs');
const path = require('path')

const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method;
	if (url === '/favicon.ico') {
		const faviconPath = path.join(__dirname, './', 'favicon.ico');
		const faviconStream = fs.createReadStream(faviconPath);
		res.writeHead(200, { 'Content-Type': 'image/x-icon' });
		faviconStream.pipe(res);
		// return res.end();
		return;
	}
	if (url === '/') {
		res.setHeader('Content-Type', 'text/html');
		res.write(`<html>`);
		res.write(`<head><title>My Enter Message Form Page</title></head>`);
		res.write(`<body>`);
		res.write(`<h1 style='color: dodgerblue; font-size: 36px; text-align: center;'>Hello from Faddah's Node.JS Server!</h1></body>`);
		res.write(`<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>`);
		res.write(`</body>`);
		res.write(`</html>`);
		return res.end();
	}
	if (url === '/message' && method === 'POST') {
		const body = [];
		req.on('data', chunk => {
			console.log(chunk);
			body.push(chunk);
		})
		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			// console.log(parsedBody);
			const message = parsedBody.split('=')[1];
			fs.writeFile('message.text', message, err => {
				res.statusCode = 302;
				res.setHeader('Location', '/');
				return res.end();
			});
		});
	}
	res.setHeader('Content-Type', 'text/html');
	res.write(`<html>`);
	res.write(`<head><title>My First Server Page</title></head>`);
	res.write(`<body><h1 style='color: dodgerblue; font-size: 36px; text-align: center;'>Hello from Faddah's Node.JS Server!</h1></body>`);
	res.write(`</html>`);
	res.end();
}

module.exports.handler = requestHandler;