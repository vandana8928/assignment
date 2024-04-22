const mongoose = require('mongoose');

// Define User schema
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});

// Create User model based on schema
const User = mongoose.model('User', userSchema);

// Export User model
module.exports = User;
