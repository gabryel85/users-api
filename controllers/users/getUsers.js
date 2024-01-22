import fs from 'fs';

export function getUsers(req, res) {
	fs.readFile('./data/users.txt', 'utf-8', (err, data) => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
		res.setHeader('Access-Control-Max-Age', 2592000);
		res.setHeader('Access-Control-Allow-Headers', 'content-type');
		res.end(data);
	});
}

// async function getUsers(req, res) {
// 	const filePath = path.join(__dirname, 'data/users.txt');

// 	try {
// 		const exists = await isFileExist(filePath);
// 		if (!exists) {
// 			res.writeHead(404, { 'Content-Type': 'application/json' });
// 			res.end(JSON.stringify({ message: 'File not found' }));
// 			return;
// 		}

// 		const data = await fs.promises.readFile(filePath, 'utf8');
// 		res.writeHead(200, { 'Content-Type': 'application/json' });
// 		res.end(data);
// 	} catch (err) {
// 		res.writeHead(500, { 'Content-Type': 'application/json' });
// 		res.end(JSON.stringify({ message: 'Error reading user data' }));
// 	}
// }
