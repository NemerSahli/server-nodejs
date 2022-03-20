const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  sprint: { type: String, required: false},
  type: { type: String, required: false},
  status: { type: String, required:true},
  deadline: { type: Date, required:false},

  organizationId: { type: String, required:true},
  teamId: { type: String, required:true},

  reportedBy: { type: String, required:true},
  createdBy: { type: String, required: true },
  updatedBy: { type: String, required: true },

  attacchedFiles: { type: [String], required:false},

  assignedTo: { type: String, required:false},

  createdAt: { type: Date, required: true, default: new Date()},
  updatedAt: { type: Date, required: true, default: new Date()},
});

TicketSchema.pre('save', function(next) {
  this.createdAt = new Date();
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('Ticket', TicketSchema);