
const express = require('express');
const app = express();

const port = 4040;

async function start() {
  app.use(express.json());
  app.listen(port, () => console.log('Server igång på http://localhost:' + port + '!'));
}


//"Livskoll" för server
app.get('/', (req, res) => {
  res.json({ message: 'livskoll : lever' });
});



start();





