const nodemailer = require('nodemailer');

const NodemailerTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_SECRET,
    port: 587, // Port for secure TLS connection
    secure: false,
    // clientId: process.env.CLIENT_ID,
    // clientSecret: process.env.CLIENT_SECRET,
    // refreshToken: process.env.REFRESH_TOKEN,
    // accessToken: process.env.ACCESS_TOKEN,
    // accessUrl: "https://accounts.google.com/o/oauth2/token",
  },
});

module.exports = NodemailerTransporter;
