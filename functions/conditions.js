const { sentencesToAnswer } = require('../constants/constants');
const { mention } = sentencesToAnswer;

module.exports.mention = (message) => {
    return message.split(' ').some(x => mention.triggerWords.some(y => y === x));
}
