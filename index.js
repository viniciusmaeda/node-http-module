// importação do módulo nativo http
const http = require("http");
// define o número de uma porta que o servidor irá rodar
const port = 3000;

// criação de um servidor
const server = http.createServer((req, res) => {
  // define o cabeçalho e a codificação
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  // obtém o endereço (url)
  const url = req.url;

  // verifica qual rota foi solicitada
  if (url === "/") {
    // http://localhost:3000
    res.write("<h1>Página inicial</h1>");
  } else if (url === "/about") {
    // http://localhost:3000/about
    res.write("<h1>Sobre</h1>");
  } else if (url === "/products") {
    // http://localhost:3000/products
    res.write("<h1>Produtos</h1>");
  } else if (url === "/user") {
    res.write("<h1>Usuário</h1>");

    // verica qual o verbo do Método
    if (req.method === "GET") {
      res.write("<h2>GET</h2>");
    } else if (req.method === "POST") {
      res.write("<h2>POST</h2>");
    } else if (req.method === "PATCH") {
      res.write("<h2>PATCH</h2>");
    } else if (req.method === "PUT") {
      res.write("<h2>PUT</h2>");
    } else if (req.method === "DELETE") {
      res.write("<h2>DELETE</h2>");
    }
  }

  // finaliza a requisição
  res.end();
});

// definindo a porta que o servidor irá rodar
server.listen(port, () => console.log(`Running on port ${port}`));
