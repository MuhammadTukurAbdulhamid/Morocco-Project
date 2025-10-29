const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const mongoose = require('mongoose');
const recordRoute = require('./routes/post.data.route');
const { default: axios } = require('axios');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(recordRoute);

mongoose.connect(process.env.DB_URL);
const conn = mongoose.connection
  .once('open', () => {
    // Generate a random JWT secret

    console.log('mongodb started');
  })
  .on('error', (error) => {
    console.log('error occured:', error);
  });

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(PORT, () => {
  console.log('listen on port', PORT);
});
