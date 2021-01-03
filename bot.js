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

    //If the random message generate the same number as the defined
    // If the command is known, let's execute it
    const random = getRandomNumber();

    if (random == secretNumber) {
        logMessage(msg, client, target);
    }
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}
