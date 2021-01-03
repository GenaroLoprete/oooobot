const { maxNumber } = require('./constants');

//get random number between 1 and the predefined number as maxnumber
module.exports.getRandomNumber = () => {
    return Math.floor(Math.random() * process.env.SECRETNUMBER) + 1
}

module.exports.replaceO = (message) => {
    return message.replace(/o/g, ' OOOO ');
}

module.exports.logMessage = (message, client, target) => {
    const newMessage = this.replaceO(message.trim());
    client.say(target, newMessage);
}