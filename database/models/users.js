const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: String
});

mongoose.model('User', User);

module.exports = mongoose.model('User', User);