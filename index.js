import http from "http";

http.createServer((request, response) => {
  response.writeHead(
    200,
    { "Content-Type": "text/plain" },
  );
  response.end("Welcome to your containerized Node.js app!\n");
}).listen(process.env.PORT || 3003);
