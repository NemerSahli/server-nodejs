const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/',async (req, res) => {
    const users = await User.find();
    
    res.status(200).send({users})
});

router.post('/',async (req, res) => {
    const isUserExist = await User.findOne({ email: req.body.email});
   
    if(isUserExist){
      return res.status(409).send({message: 'User already exists'})
    } 
    
    const user = await User.create(req.body);
    res.status(201).send({user});
});

module.exports = router;