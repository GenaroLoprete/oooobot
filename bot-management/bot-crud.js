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

        await global.client.join(username);

        await databaseManagement.insertUser(username);

        logMessage(`added ${username}`, global.client, target);
    }
    catch (err) {

        console.log(err);

        logMessage(`Error adding ${username}, please contact @ganro12 or @GenaroLoprete in twitter`, global.client, target)
    }
}

async function removeFromBot(context, target) {
    const { username } = context;

    try {

        await global.client.part(username);

        await databaseManagement.deleteUser(username);

        logMessage(`removed ${username}`, global.client, target);
    }
    catch (err) {

        console.log(err);

        logMessage(`Error leaving ${username}, please contact @ganro12 or @GenaroLoprete in twitter, error ${err}. You can ban me from your channel!`, global.client, target)
    }
}

module.exports.rejoinChannels = async () => {
    try {
        // const usernames = await databaseManagement.getAllUsers();
        const usernames = ['ganro12']
        const promisesPart = usernames.map(x => {
            return new Promise((resolve, reject) => {
                return global.client.part(x)
                    .then(_ => resolve())
                    .catch(err => reject(err))
            });
        });

        await Promise.allSettled(promisesPart);

        const promisesJoin = usernames.map(x => {
            return new Promise((resolve, reject) => {
                return global.client.join(x)
                    .then(_ => resolve())
                    .catch(err => reject(err))
            });
        });

        await Promise.allSettled(promisesJoin);
    }
    catch (err) {
        console.log(err)
    }
}