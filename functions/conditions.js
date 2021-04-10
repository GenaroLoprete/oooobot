const { sentencesToAnswer } = require('../constants/constants');
const { mention } = sentencesToAnswer;

module.exports.mention = (message) => {
    return message.split(' ').some(x => mention.triggerWords.some(y => y === x));
}

//TODO SERVICIO QUE CADA UN DIA APROX, CHEQUEE LOS USERS, PORQUE CREO QUE EN CADA DEPLOY LOS BORRA
