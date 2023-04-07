const http = require("http");




const server = http.createServer((req, res) => {
  res.end("Hello World!");
});


server.listen(3000, () => {
  console.log("Server running on port 3000");
});



fs.readFile("welcome.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

