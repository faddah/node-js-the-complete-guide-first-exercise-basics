const fs = require('fs');

const pathToUserListFile = './userList.txt';

const readFileToArray = (filePath) => {
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, 'utf8', (error, data) => {
			if (error) {
				reject(`The Promise to read in the userList.txt file was rejected: ${error}.`);
			} else {
				resolve(data.trim().split('\n'));
			}
		});
	});
}

/* 
async function readFileToArray(filePath) {
  try {
		return await fs.readFile(filePath, 'utf8', data => data.split('\n').map(line => trim.trim()));
  } catch (error) {
    console.error(`The Promise to read in the userList.txt file was rejected: ${error}.`);
  }
}


const readFileToArray = async (filePath) => {
	try {
		return await fs.readFile(filePath, 'utf8', data => data.split('\n').map(line => trim.trim()));
	} catch(error) {
		console.error(`The Promise to read in the userList.txt file was rejected: ${error}.`);
	}
}
*/
	// fs.readFile(filePath, 'utf8', (error, data) => {
	// 	if(error) throw `An error occured reading in the userList.txt file: ${error}.`;
	// 	return data.trim().split('\n');
	// });

const getUsersList = () => {
	return readFileToArray(pathToUserListFile) // returns data as Promise
		.then(dataArray => dataArray.map(dataMember => `<li>${dataMember}</li>\n`).join('').toString()) // ETL to make array items HTML line items
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