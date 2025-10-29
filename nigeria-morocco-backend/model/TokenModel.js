const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TokenSchema = Schema(
  {
    creation_date: { type: Date },
    email: { type: String },
    reference: { type: String },
    used: { type: Boolean },
    expire_date: { type: Date },
  },
  { timestamps: true }
);

const Token = mongoose.model('token', TokenSchema);

module.exports = {
  Token,
};
