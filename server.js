const express = require('express');
const app = express();
const port = process.env.PORT || 8050;
const route = require('./routes');
const contactsRoute = require('./routes/contactsRoute');

const mongodb = require('./model/dbConnection');

app.use('/', route);
app.use('/contact', contactsRoute);

mongodb.initDb((error) => {
    if(error){
        console.log(error);
    } else {
        app.listen(port, () =>{
            console.log(`Data base is connected and node app is listening on port: ${port}`)
        })
    }
})

