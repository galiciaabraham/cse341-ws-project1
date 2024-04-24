const express = require('express');
const app = express();
const port = process.env.PORT || 8050;
const route = require('./routes');

const mongodb = require('./model/dbConnection');

app.use('/', route);
console.log('OK');

mongodb.initDb((error) => {
    if(error){
        console.log(error);
    } else {
        app.listen(port, () =>{
            console.log(`Data base is connected and node app is listening on port: ${port}`)
        })
    }
})

