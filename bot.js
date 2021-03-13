const tmi = require("tmi.js");
const { getRandomNumber, logMessage } = require("./functions");
const { username, password, channels, secretNumber } = require("./constants");

// Define configuration options
const opts = {
    identity: {
        username,
        password
    },
    channels
};
//TODO Put the instance of the client in a separated file
// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler(target, context, msg, self) {
    if (self) {
        return;
    } // Ignore messages from the bot

    if (!msg.toLowerCase().includes('o')) {
        return; //If the msg don't contain an o, return because the bot is gonna log the same mesagge
    }

    //If the random message generate the same number as the defined
    // If the command is known, let's execute it
    const random = getRandomNumber();

    if (random != secretNumber) { //If the generated number is not the same that the secret number defined in the env, don't log the message
        return;
    }

    //If is all ok, log the message
    logMessage(msg, client, target);
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}


/*For staying the bot alive, weird, but need to have the bot alive*/
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('pong');
    res.end();
}).listen(process.env.PORT || 8000);