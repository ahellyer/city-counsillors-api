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
  // using the Item schema, find anything that matches it
  Ward.find({}, (err, items) => {
    // if there is an error
    if (err) {
      res
        // the response's status should be 400
        .status(400)
        // and what we should get back from this function
        .send({
          // is an error message
          error: err
        });
      // then, stop running this code
      return;
    }
    // if there is no error
    res
      // the response's status should be 200
      .status(200)
      // and we should get back our data from this function
      .send(items);
  });
});
