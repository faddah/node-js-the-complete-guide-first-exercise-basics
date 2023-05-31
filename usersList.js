const fs = require('fs');

const pathToUserListFile = './userList.txt';

const readFileToArray = (filePath) => {
	try {
		const data = fs.readFileSync(filePath, 'utf8');
		const dataArray = data.trim().split('\n');
		return dataArray;
	} catch (error) {
		throw new Error(`The Promise to read in the text file was rejected: ${error}.`);
	}
}

const dataList = readFileToArray(pathToUserListFile);

const usersList = dataList.map(user => `<li>${user}</li>\n`).join('').toString();

module.exports.usersList = usersList;


// const readFileToArray = (filePath) => {
// 	return new Promise((resolve, reject) => {
// 		fs.readFile(filePath, 'utf8', (error, data) => {
// 			if (error) {
// 				reject(`The Promise to read in the text file was rejected: ${error}.`);
// 			} else {
// 				const dataArray = data.trim().split('\n');
// 				resolve(dataArray);
// 			}
// 		});
// 	});
// }