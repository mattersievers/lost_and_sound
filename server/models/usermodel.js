const mongoose = require('mongoose');
const Equipment = require('./itemmodel');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  savedEquipment: [Equipment.schema],
  resetPasswordKey: String,
  about: String,
  country: String,
  city: String,
  zip: String,
  phone: String,
  registrationDate: Date
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

// userSchema.pre('save', function(next) {
//   this.date = new Date();
//   next();
// });

module.exports = mongoose.model('User', userSchema);