const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API CSE341 - Abraham Galicia',
    description: 'Here you can find the documentation for my contacts API created using Swagger'
  },
  host: 'https://cse341-ws-project1.onrender.com/'
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);