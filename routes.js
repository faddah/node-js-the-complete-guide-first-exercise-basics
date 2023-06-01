const fs = require('fs');
const path = require('path')

const { homeWithInputTemplate } = require('./homeWithInputTemp')
const { homeTemplate } = require('./homeTemp')
const { usersTemplate } = require('./usersTemp')

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
	res.write(homeWithInputTemplate);
	return res.end();
}
	if (url === '/users') {
		console.log(`Now in the User List Template.`);
		res.write(usersTemplate);
		return res.end();
	}
	if (url === '/create-user' && method === 'POST') {
		const body = [];
		req.on('data', chunk => {
			console.log(chunk);
			body.push(chunk);
		})
		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			// console.log(parsedBody);
			const newUser = parsedBody.split('=')[1];
			console.log(newUser);
			fs.writeFile('message.text', newUser, err => {
				res.statusCode = 302;
				res.setHeader('Location', '/users');
				return res.end();
			});
		});
	}
	res.setHeader('Content-Type', 'text/html');
	res.write(homeTemplate);
	res.end();
}

module.exports.handler = requestHandler;