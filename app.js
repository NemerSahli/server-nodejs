const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/users');
const tickets = require('./routes/tickets.js');

const app = express();
app.use(express.json());
require('dotenv').config();

mongoose
  .connect(process.env.mongoURL, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

// routes middlewares
app.use('/v0/users', users);
app.use('/v0/tickets', tickets);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server running on port ${port}...`);
});