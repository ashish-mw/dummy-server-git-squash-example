
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.send('Hello!');
});

app.listen(4567, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Running on 4567');
});


