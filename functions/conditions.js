const { sentencesToAnswer, impostors } = require('../constants/constants');
const { mention, relax, creators } = sentencesToAnswer;

module.exports.mention = (message) => {
    return message.split(' ').some(x => mention.triggerWords.some(y => y === x));
}

module.exports.isImpostor = (username) => {
    return impostors.some(x => x === username);
}

module.exports.isRelax = (message) => {
    return relax.triggerWords.some(x => message.toUpperCase().includes(x.toUpperCase()));
}

module.exports.isCreator = (username) => {
    return creators.triggerWords.some(x => x === username);
}
