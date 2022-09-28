import http from "http";

http.createServer((request, response) => {
  response.writeHead(
    200,
    { "Content-Type": "text/plain" },
  );
  response.end(
    `Welcome to your containerized Node.js app ${process.env.HELLO}`,
  );
}).listen(3000);
