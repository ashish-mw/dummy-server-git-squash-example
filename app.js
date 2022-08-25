
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  // -> 1. change here to return Hello World! instead of just Hello!
  return res.send('Hello!');
});


// -> 2. change 4567 to use a variable
app.listen(4567, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Running on 4567');
});


