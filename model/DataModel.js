const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PaymentSchema = Schema({
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
const RecordSchema = Schema(
  {
    company_name: { type: String },
    creation_date: { type: Date },
    address: { type: String },
    number_of_employees: { type: String },
    website: { type: String },
    mobile: { type: String },
    email: { type: String },
    company_niche: { type: [String] },
    import_morocco: { type: String },
    export_morocco: { type: String },
    meeting_sectors: [String],
    image_url: { type: String },
    qr_data: { type: String, default: undefined },
    date_created: { type: Date },
    full_name: { type: String },
    ministry: { type: String },
    governmental: { type: Boolean },
    annual_turnover: { type: String },
    designation: { type: String },
    cin: { type: String },
    payment: {
      type: Object,
      ref: 'Payment',
      default: undefined,
    },
  },
  { timestamps: true }
);
const Payment = mongoose.model('Payment', PaymentSchema);
const Record = mongoose.model('record', RecordSchema);

module.exports = {
  Payment,
  Record,
};
