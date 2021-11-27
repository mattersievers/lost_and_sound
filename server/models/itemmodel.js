const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  category: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  description: { type: String, required: true },
  serialNumber: { type: String, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  lost: {type: Boolean, required: true },
  comment: String,
  lostTime: String,
  date: Date
});

ItemSchema.pre('save', function(next) {
  this.date = new Date();
  next();
});

module.exports = mongoose.model('Equipment', ItemSchema);