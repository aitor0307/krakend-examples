const express = require('express')
const app = express()
const port = 4001;
app.use(express.json());

app.get('/', function (req, res) {
  console.log("Server 2 req");
  res.send("Hello world");
})

app.post('/', function (req, res) {
  console.log("Server 2 req POST");
  console.log(JSON.stringify(req.body));
  res.send(req.body);
})

console.log("Server 2 started");

app.listen(port, () => {
  console.log(`Server 2 is running on port ${port}`);
});