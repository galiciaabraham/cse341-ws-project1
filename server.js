const express = require('express');
const app = express();
const port = process.env.PORT || 8050;
const route = require('./routes');

const mongodb = require('./model/dbConnection');


app.use('/', route);

mongodb.initDb = (error) => {
    if(error){
        console.log(error);
    } else {
        app.listen(port, () =>{
            console.log(`Database is listening and node is working in port: ${port}`);
        })
    }

}

