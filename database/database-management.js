const mongoose = require('mongoose');
const User = require('./models/users');

function findByUserName(userName) {
    return new Promise((resolve, reject) => {
        User.find({ name: userName })
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    })
}

module.exports.insertUser = (username) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await findByUserName(username);
            if (result.length > 0) {
                return resolve(); //if is already added, resolve the promise
            }

            const user = new User({ name: username });
            await user.save();

            return resolve();
        }
        catch (err) {
            return reject(err);
        }
    })
}

module.exports.deleteUser = (username) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await findByUserName(username);

            if (result.length === 0) {
                return resolve(); //if is not registered, then resolve
            }

            await User.findOneAndDelete({ name: username }, (err) => {
                if (err) return reject(err);
                return resolve();
            });
        }
        catch (err) {
            return reject(err);
        }
    });
}

module.exports.getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const users = await User.find({});

            const usersRemaped = users.map(x => x.name); //Get all the user names

            return resolve(usersRemaped);
        }
        catch (err) {
            reject(err);
        }
    });
}