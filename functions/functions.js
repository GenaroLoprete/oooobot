const { sentencesToAnswer, secretNumber } = require('../constants/constants');
const { mention } = sentencesToAnswer;
const { mention: mentionCondition } = require('./conditions');

//internal functions
const replaceO = (message) => {
    return message.replace(/o/g, ' OOOO '); //Search for al o's and replace for the OOOO
}

//get random number between 1 and the predefined number as maxnumber
const getRandomNumber = () => {
    return Math.floor(Math.random() * process.env.SECRETNUMBER) + 1; //Generate a random number, this for preventing the bot to log the message for every message in the chat
}

const getMessage = (message) => {
    let finalMessage = message.toLowerCase(); //Message setted to lower case

    if (mentionCondition(finalMessage)) {
        finalMessage = mention.answer;
    }

    finalMessage = finalMessage.trim(); //Remove spaces from the start and the end
    finalMessage = replaceO(finalMessage); //replace all the o's in the message

    return finalMessage.toUpperCase();
}

module.exports.logMessage = (message, client, target) => {
    client.say(target, message); //Log the message in the chat
}

module.exports.logMessageInChat = (message, client, target) => {
    this.logMessage(getMessage(message), client, target); //Log the message in the chat
}

module.exports.canLogMessage = (self, msg) => {

    if (self) {
        return false;
    } // Ignore messages from the bot

    if (!msg.toLowerCase().includes('o')) {
        return false; //If the msg don't contain an o, return because the bot is gonna log the same mesagge
    }

    if (mentionCondition(msg)) {
        return true;
    }

    //If the random message generate the same number as the defined
    // If the command is known, let's execute it
    const random = getRandomNumber();

    if (random != secretNumber) { //If the generated number is not the same that the secret number defined in the env, don't log the message
        return false;
    }

    return true;
}

