export function getTodo(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Tutaj możemy zwrócić dane TODO' }));
}