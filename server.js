const express = require('express');
const app = express();
const port = process.env.PORT || 8050;
const route = require('./routes');

app.use('/', route);

app.listen(port, () =>{
    console.log(`App listening in port: ${port}`);
})