const express = require('express');
const mongoose = require('mongoose');

const User = require('./models/User');

const app = express();
app.use(express.json());
require('dotenv').config();


mongoose
  .connect(process.env.mongoURL, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));


app.get('/',async (req, res) => {
    // const user = User.create({firstName: 'john',
    //     lastName: 'doe',
    //     email: 'john@doe.com',
    //     password: '123456'})

    const users = await User.find();
    
    res.status(200).send({users})
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server running on port ${port}...`);
});