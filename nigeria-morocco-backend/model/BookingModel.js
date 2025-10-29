const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookingPaymentSchema = Schema({
  method: {
    type: String,
    enum: ['PAYSTACK', 'CODE'],
  },
  status: {
    type: String,
    enum: ['PENDING', 'SUCCESS', 'FAILED'],
  },
  date: { type: Date },
  reference: { type: String },
  amount: { type: String },
});
const BookingSchema = Schema(
  {
    creation_date: { type: Date },
    email: { type: String },
    space: { type: String },
    mobile: { type: String },
    name: { type: String },
    full_name: { type: String },
    job_title: { type: String },
    annual_turnover: { type: String },
    sector: [String],
    personalised: { type: Boolean },
    square_meters: { type: String },
    personal_meters: { type: String },
    payment: {
      type: Object,
      ref: 'BookingPayment',
      default: undefined,
    },
  },

  { timestamps: true }
);

const Booking = mongoose.model('booking', BookingSchema);
const BookingPayment = mongoose.model('BookingPayment', BookingPaymentSchema);
module.exports = {
  Booking,
};
