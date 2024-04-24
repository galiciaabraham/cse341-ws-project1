const dotEnv = require('dotenv');
dotEnv.config;
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let dataBase;

const initDb = (callback) => {
    if(dataBase){
        console.log('Database has been initialized!');
        return callback(null, dataBase);
    }
    MongoClient.connect(process.env.mongoDb_URL).then((client) => {
        dataBase = client;
        callback(null, dataBase);
    }).catch((error) => {
        callback(error);
    });
};

const getDb = () => {
    if(!dataBase) {
        throw Error('Database has not been initalized');
    }
    return dataBase;
};

module.exports = {initDb, getDb };