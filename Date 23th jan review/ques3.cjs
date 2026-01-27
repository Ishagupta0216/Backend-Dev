const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { user, key } = parsedUrl.query;

    if (user === 'admin' && key === 'Secret') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to Vault');
    } else {
        res.writeHead(401, { 'Content-Type': 'text/plain' });
        res.end('Access Denied');
    }
});

server.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
});
