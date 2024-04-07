const crypto = require('crypto');
function generateTransactionRef() {
  const randomString = crypto.randomBytes(8).toString('hex'); // Adjust the byte length as needed

  const timestamp = Date.now();

  const transactionRef = `NM-${timestamp}-${randomString}`;

  return transactionRef;
}

module.exports = { generateTransactionRef };
