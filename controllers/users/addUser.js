import fs from 'fs';
import path from 'path';
import { getDirname } from '../../utils.js';

const __dirname = getDirname(import.meta.url);

export async function addUser(req, res) {
	let body = '';

	for await (const chunk of req) {
		body += chunk;
	}
	const pathToFile = path.join(__dirname, '..', '../data/users.txt');
	const users = JSON.parse(await fs.promises.readFile(pathToFile, 'utf-8'));
	users.push(JSON.parse(body));

	await fs.promises.writeFile(pathToFile, JSON.stringify(users, null, 2), 'utf-8');

	res.end(body);
}
