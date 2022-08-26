

require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT


function start() {
  app.use(express.json());
  app.listen(PORT, () => console.log('Server igång på http://localhost:' + PORT + '!'));
}



//"Livskoll" för server
app.get('/', (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200);
  res.send("<h2>Hallå världen!!!!</h2>");
  res.json({ message: 'livskoll : lever' });
});

app.post("/", (req, res) => {
  res.send("postpostpost")
});


start();





