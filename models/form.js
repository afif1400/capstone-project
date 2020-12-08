const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  teamName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  membersRequired: {
    type: Number,
    default: 0,
  },
  domain: {
    type: String,
    required: true,
  },
});

formsModel = mongoose.model('formsSchema', formSchema);

module.exports = formsModel;
