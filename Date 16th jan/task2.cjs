// const express = require("express");
// const fs = require("fs");
// const path = require("path");

// const app = express();
// const PORT = 8000;

// // Route: /admin
// app.get("/admin", (req, res) => {
//   const { user, pass } = req.query;

//   // 1. Check credentials
//   if (user === "admin" && pass === "1234") {
//     // 2. Success: Read admin_dashboard.html
//     const filePath = path.join(__dirname, "admin_dashboard.html");
//     fs.readFile(filePath, "utf8", (err, data) => {
//       if (err) {
//         res.status(500).send("Error loading dashboard.");
//       } else {
//         res.send(data); // Send HTML content to browser
//       }
//     });
//   } else {
//     // 3. Failure: Wrong credentials
//     res.status(401).send("Access Denied.");
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  const user = url.searchParams.get('user');
  const pass = url.searchParams.get('pass');

  if (pathname === '/admin') {
    if (user === 'admin' && pass === '1234') {
      try {
        const data = fs.readFileSync('./admin_dashboard.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading admin page');
      }
    } else {
      res.writeHead(401, { 'Content-Type': 'text/plain' });
      res.end('Unauthorized');
    }
  } else {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Access denied');
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
