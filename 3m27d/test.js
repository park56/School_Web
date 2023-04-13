const http = require('http');
const fs = require('fs').promises;

http
    .createServer(async (req, res) => {
        try {
            const data = await fs.readFile('./server.html');
            res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
            res.end(data);
        } catch {
            console.log(err)
            res.writeHead(500, { 'Content-type': 'text/html; charset=utf-8' });
            res.end(err.message);
        }
    })
    .listen(8080, () => {
        console.log('8080 포트에서 대기중');
    })