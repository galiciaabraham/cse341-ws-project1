const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const contactsRoute = require('./contactsRoute');


router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));
router.use('/contact', contactsRoute);

module.exports = router;
