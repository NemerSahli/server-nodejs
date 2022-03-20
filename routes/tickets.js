const express = require('express');
const Ticket = require('../models/Ticket');

const router = express.Router();

router.get('/',async (req, res) => {
    const tickets = await Ticket.find();
    
    res.status(200).send({tickets})
});

router.get('/:id', async (req, res) => {
    if (!req.params.id) {
      return res.status(404),send();
    }
  
    await Ticket.findOne({_id: req.params.id }, (err, ticket) => {
      if (err) return res.send(err);
      return res.send({ ticket });
    });
});

router.post('/',async (req, res) => {
    
    const ticket = await Ticket.create(req.body);
    res.status(201).send({ticket});
});

router.delete('/',async (req, res) => {
    
    const ticket = await Ticket.deleteMany();
    res.status(204).send();
});

module.exports = router;