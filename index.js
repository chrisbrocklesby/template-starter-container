import http from "http";

http.createServer((request, response) => {
  response.writeHead(
    200,
    { "Content-Type": "text/plain" },
  );
  response.end(
    `Welcome to your containerized Node.js app!\n ${process.env.HELLO}`,
  );
}).listen(process.env.PORT || 3000);
