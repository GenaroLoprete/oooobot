const tmi = require("tmi.js");
const { logMessageInChat, canLogMessage } = require("./functions/functions");
const { username, password, channels, botName } = require("./constants/constants");
const { processCommands } = require("./bot-management/bot-crud");
const database = require('./database/database-connection');

// Define configuration options
//TODO: constants
const opts = {
    identity: {
        username,
        password
    },
    channels
};
//TODO Put the instance of the client in a separated file
// Create a client with our options
global.client = new tmi.client(opts);

// Register our event handlers (defined below)
global.client.on("message", onMessageHandler);
global.client.on("connected", onConnectedHandler);

// Connect to Twitch:
global.client.connect();

database.connect();

// Called every time a message comes in
function onMessageHandler(target, context, msg, self) {
    //if is in the channel of the bot
    if (target === botName) {
        processCommands(msg, context, target);
    }
    else { //If is not the bot
        console.log('lei de otro lado');
        if (!canLogMessage(self, msg)) {
            return;
        }
        //If is all ok, log the message
        logMessageInChat(msg, global.client, target);
    }
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
    require('./bot-management/bot-crud').rejoinChannels();
}


// /** Cron, re join the channels */
// cron.schedule('0 3 * * *', () => {
//     require('./functions/functions').rejoinChannels();
// });

/*For staying the bot alive, weird, but need to have the bot alive*/
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('pong');
    res.end();
}).listen(process.env.PORT || 8000);


//emotes : null o emotes : {}