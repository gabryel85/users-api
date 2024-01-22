import fs from 'fs';
import { getUsers } from './users/getUsers.js';
import { getTodo } from './todo/getTodo.js';

// export function handleRequest(req, res) {
// 	// res.writeHead(200, { 'Content-Type': 'application/json' });
// 	// res.end(JSON.stringify({ message: 'OK' }));
// 	const { method, url } = req;

// 	if (method === 'GET' && url === '/api/users') {
// 		fs.readFile('./data/users.txt', 'utf-8', (err, data) => {
// 			res.setHeader('Access-Control-Allow-Origin', '*');
// 			res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
// 			res.setHeader('Access-Control-Max-Age', 2592000);
// 			res.setHeader('Access-Control-Allow-Headers', 'content-type');
// 			res.end(data);
// 		});
// 	} else {
// 		res.writeHead(404, { 'Content-Type': 'application/json' });
// 		res.end(JSON.stringify({ message: 'Route not found' }));
// 	}
// }

const routes = {
	'/api/users': {
		GET: getUsers,
		// POST: addUser,
	},
	'/api/todo': {
		'GET': getTodo
	}
};

export default function controller(req, res) {
	const { method, url } = req;

	const handler = routes[url] && routes[url][method];

	if (handler) {
		handler(req, res);
	} else {
		res.writeHead(404, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify({ message: 'Route not found' }));
	}
}
