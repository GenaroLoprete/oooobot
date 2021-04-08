const mongoose = require('mongoose');
const constants = require('../constants/constants');

module.exports.connect = async () => {
    await mongoose.connect(constants.DBCONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
    mongoose.connection.once('open', function () {
        console.log('connection open');
    });
}