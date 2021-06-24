module.exports.maxNumber = process.env.MAXNUMBER;
module.exports.username = process.env.USERNAME;
module.exports.password = process.env.PASSWORD;
module.exports.channels = process.env.CHANNELS.split(',');
module.exports.secretNumber = process.env.SECRETNUMBER;
module.exports.DBCONNECTION = process.env.DBCONNECTION;
module.exports.botName = '#ooooboooot';
module.exports.regexTestUrl = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,
module.exports.impostors = process.env.IMPOSTORS.split(',');
module.exports.sentencesToAnswer = {
    mention: {
        triggerWords: ['@ooooboooot'],
        answers: ['Qué pasa conmigo', 'o o o o']
    },
    impostor: {
        answers: ['Yo soy el real, no tu', '¡¡Impostor!!', 'La suplantación de identidad es un delito, tu computadora está siendo rastreada bip bup bop']
    }
};
module.exports.commands = {
    ADDME: '!addme',
    REMOVEME: '!removeme',
    HELP: '!help',
}
module.exports.messages = {
    ADDED : '',
    REMOVED : ''
}

