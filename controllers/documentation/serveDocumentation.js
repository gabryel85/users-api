import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getDirname } from '../../utils.js';

const __dirname = getDirname(import.meta.url);

export const serveDocumentation = (req, res) => {
	console.log(__dirname);
	fs.readFile(path.join(__dirname, 'api-documentation.html'), 'utf-8', (err, data) => {
		if (err) {
			res.writeHead(500, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify({ message: 'Error reading the file' }));

			return;
		}

		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(data);
	});
};
