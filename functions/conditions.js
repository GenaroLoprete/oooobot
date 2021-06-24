const { sentencesToAnswer, impostors } = require('../constants/constants');
const { mention } = sentencesToAnswer;

module.exports.mention = (message) => {
    return message.split(' ').some(x => mention.triggerWords.some(y => y === x));
}

module.exports.isImpostor = (username) => {
    return impostors.some(x => x === username);
}
