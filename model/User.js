const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      //  required: true,
    },
    lastName: {
      type: String,
      //  required: true,
    },

    email: {
      type: String,
      //  required: true,
      unique: true,
    },
    password: {
      type: String,
      //  required: true
    },

    role: {
      type: String,
      enum: ['admin', 'super_admin'], // user has basic access while admin have more
      default: 'admin',
    },
  },
  { timestamps: true }
); // to create a model of user

module.exports = mongoose.model('User', userSchema); // to export file
