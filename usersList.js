const fs = require('fs');

const readFileToArray = (filePath) => {
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, 'utf8', (error, data) => {
			if (error) {
				reject(`The Promise to read in the text file was rejected: ${error}.`);
			} else {
				const dataArray = data.trim().split('\n');
				resolve(dataArray);
			}
		});
	});
}

const usersList = readFileToArray('./userList.txt')
	.then(arrayData => {
		console.log(arrayData);
		const lineItems = arrayData.map(user => `<li>${user}</li>\n`).join().toString();
		console.log(`Here are the returned lineItems: \n${lineItems}.`);
		return lineItems;
	})
	.catch(error => {
		console.error(`There was an error reading in the User List Text file: ${error}.`);
	});

console.log(`Our Users List: ${usersList}`);

module.exports.usersList = usersList;