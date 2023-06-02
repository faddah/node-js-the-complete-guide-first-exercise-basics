const fs = require('fs');

const pathToUserListFile = './userList.txt';

const readFileToArray = (filePath) => {
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, 'utf8', (error, data) => {
			if (error) {
				reject(`The Promise to read in the text file was rejected: ${error}.`);
			} else {
				resolve(data.trim().split('\n'));
			}
		});
	});
}
	// fs.readFile(filePath, 'utf8', (error, data) => {
	// 	if(error) throw `An error occured reading in the userList.txt file: ${error}.`;
	// 	return data.trim().split('\n');
	// });

const getUsersList = () => {
	readFileToArray(pathToUserListFile)
		.then(dataArray => {
			return dataArray.map(dataMember => `<li>${dataMember}</li>\n`).join('').toString();
		})
		.catch(error => console.error(`There was an error attempting to retrieve the userList.txt: ${error}.`));
}

module.exports.getUsersList = getUsersList;


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