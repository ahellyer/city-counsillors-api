const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'app is working!' });
});

app.listen(port, () => {
  console.log(`now listening  ${port}.`);
});
