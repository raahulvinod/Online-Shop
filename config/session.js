const expressSession = require('express-session');
const mongodbStore = require('connect-mongodb-session');

function createSessionStore(sesexpressSessionsion) {
    const MongodbStore = mongodbStore(expressSession);

    const store = new MongodbStore({
        uri: 'mongodb://127.0.0.1:27017',
        databaseName: 'online-shop',
        collection: 'sessions'
    });

    return store;
}

function createSessionConfig() {
    return {
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
        store: createSessionStore(),
        cookie: {
            maxAge: 2 * 24 * 60 * 60 * 1000
        }
    };
}

module.exports = createSessionConfig;


