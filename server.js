const http = require("http");

const requestListener = (request, response) => {
  response.setHeader("Content-Type", "application/JSON");
  response.setHeader("Powered-By", "Node-js");
  response.statusCode = 200;

  const { url, method } = request;
  if (url === "/") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: `Ini adalah Homepage`,
        })
      );
    }
    if (method !== "GET") {
      response.statusCode = 400;
      response.end(
        JSON.stringify({
          message: `<h1>Halaman tidak dapat diakses dengan method ${method}</h1>`,
        })
      );
    }
  } else if (url === "/about") {
    if (method === "POST") {
      let body = [];

      request.on("data", (chunk) => {
        body.push(chunk);
      });
      response.statusCode = 200;
      request.on("end", () => {
        body = Buffer.concat(body).toString();
        response.end(
          JSON.stringify({
            message: `<h1>>Hello, ${body}</h1>`,
          })
        );
      });
    } else if (method === "PUT") {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: `Ini adalah metode ${method}`,
        })
      );
    } else if (method === "DELETE") {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: `ini adalaha metode ${method}`,
        })
      );
    } else {
      response.statusCode = 400;
      response.end(
        JSON.stringify({
          message: `<h1>Halaman tidak dapat diakses dengan method ${method}</h1>`,
        })
      );
    }
  } else {
    response.statusCode = 404;
    response.end(
      JSON.stringify({
        message: "Halaman Tidak Ditemukan",
      })
    );
  }
};

const server = http.createServer(requestListener);
const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
