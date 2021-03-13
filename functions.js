//get random number between 1 and the predefined number as maxnumber
module.exports.getRandomNumber = () => {
    return Math.floor(Math.random() * process.env.SECRETNUMBER) + 1; //Generate a random number, this for preventing the bot to log the message for every message in the chat
}

module.exports.replaceO = (message) => {
    return message.replace(/o/g, ' OOOO '); //Search for al o's and replace for the OOOO
}

module.exports.logMessage = (message, client, target) => {
    let finalMessage = message.toLowerCase(); //Message setted to lower case
    finalMessage = finalMessage.trim(); //Remove spaces from the start and the end
    finalMessage = this.replaceO(finalMessage); //replace all the o's in the message
    client.say(target, finalMessage.toUpperCase()); //Log the message in the chat
}