import fs from 'fs';
import path from 'path';
import { getDirname, isFileExist } from '../../utils.js';

// export function getUsers(req, res) {
// 	fs.readFile('./data/users.txt', 'utf-8', (err, data) => {
// 		res.end(data);
// 	});
// }

export async function getUsers(req, res) {
	const __dirname = getDirname(import.meta.url);

	const filePath = path.join(__dirname, '..', '../data/users.txt');
	console.log(filePath);

	try {
		const exists = await isFileExist(filePath);
		if (!exists) {
			res.writeHead(404, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify({ message: 'File not found' }));
			return;
		}

		const data = await fs.promises.readFile(filePath, 'utf8');
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(data);
	} catch (err) {
		res.writeHead(500, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify({ message: 'Error reading user data' }));
	}
}
