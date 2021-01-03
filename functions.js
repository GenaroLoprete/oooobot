const { maxNumber } = require('./');

//get random number between 1 and the predefined number as maxnumber
module.exports.getRandomNumber = () => {
    return Math.floor(Math.random() * maxNumber) + 1
}

module.exports.replaceO = (message) => {
    return message.replace(/o/g, ' OOOO ');
}

module.exports.logMessage = (message, client) => {
    const newMessage = replaceO(message.trim());
    client.say(newMessage);
    console.log('Logged ' + newMessage);
}