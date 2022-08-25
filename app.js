
const express = require('express');

const app = express();

const PORT = process.env.PORT || 4567;

app.get('/', (req, res) => {
  return res.send('Hello World!');
});


app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Running on ${PORT}`);
});


