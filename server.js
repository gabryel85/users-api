import http from 'http';
import controller from './controllers/index.js';

const server = http.createServer(controller);

const port = 3005;

server.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
