const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

const router = express.Router();
app.use('/', router);

const dbURL =
  process.env.MONGODB_URI ||
  `mongodb://heroku_9kn422d1:2mb3lffure84tc1i6lnsj6nrsv@ds263927.mlab.com:63927/heroku_9kn422d1`;

const Ward = require('./schema/wards.js');

mongoose.connect(dbURL);

app.listen(port, () => {
  console.log(`now listening ${port}.`);
});

router.route('/').get((req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  // get all items in db
  Ward.find({}, (err, items) => {
    if (err) {
      res.status(400).send({
        error: err
      });
      return;
    }
    res.status(200).send(items);
  });
});
