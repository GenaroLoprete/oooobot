module.exports.maxNumber = process.env.MAXNUMBER;
module.exports.username = process.env.USERNAME;
module.exports.password = process.env.PASSWORD;
module.exports.channels = process.env.CHANNELS.split(',');
module.exports.secretNumber = process.env.SECRETNUMBER;
module.exports.DBCONNECTION = process.env.DBCONNECTION;
module.exports.botName = '#ooooboooot'
module.exports.sentencesToAnswer = {
    mention: {
        triggerWords: ['@ooooboooot'],
        answers: ['Qué pasa conmigo', 'o o o o']
    }
}
module.exports.commands = {
    ADDME: '!addme',
    REMOVEME: '!removeme',
    HELP: '!help',
}
module.exports.messages = {
    ADDED : '',
    REMOVED : ''
}
