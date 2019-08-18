// models/item.js
const mongoose = require('mongoose');
const WardSchema = new mongoose.Schema({
  data: Array
});

module.exports = mongoose.model('Ward', WardSchema);
