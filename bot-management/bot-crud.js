const { commands } = require('../constants/constants');
const databaseManagement = require('../database/database-management');
const { logMessage } = require('../functions/functions');

module.exports.processCommands = (command, context, target) => {
    switch (command) {
        case commands.ADDME:
            addToBot(context, target);
            break;
        case commands.REMOVEME:
            removeFromBot(context, target);
            break;
    }
}

async function addToBot(context, target) {
    const { username } = context;
    try {

        await databaseManagement.insertUser(username);

        await global.client.join(username);

        logMessage(`YA EST OOOO Y EN TU CHAT ${username}`, global.client, target);
    }
    catch (err) {

        console.log(err);

        logMessage(err, global.client, target)
    }
}

async function removeFromBot(context, target) {
    const { username } = context;

    try {

        await databaseManagement.deleteUser(username);

        await global.client.part(username);

        logMessage(`N OOOO EST OOOO Y MÁS ${username} EN TU CHAT`, global.client, target);
    }
    catch (err) {

        console.log(err);

        logMessage(`N OOOO EST OOOO Y MÁS ${username} EN TU CHAT`, global.client, target)
    }
}

module.exports.rejoinChannels = async () => {
    try {
        const usernames = await databaseManagement.getAllUsers();

        const promisesPart = usernames.map(x => {
            return new Promise((resolve, reject) => {
                return global.client.part(x)
                    .then(_ => resolve())
                    .catch(err => reject(err))
            });
        });

        await Promise.allSettled(promisesPart);

        const promisesJoin = usernames.map(x => {
            return new Promise(async (resolve, reject) => {
                await new Promise(resolve => setTimeout(resolve, 5000));
                return global.client.join(x)
                    .then(_ => { console.log("joined ", x); resolve() })
                    .catch(err => reject(err))
            });
        });

        await Promise.allSettled(promisesJoin);
    }
    catch (err) {
        console.log(err)
    }
}