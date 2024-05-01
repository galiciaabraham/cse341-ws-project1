const express = require('express');
const router = express.Router();
const contactsRoute = require('./contactsRoute');

router.get('/', (req, res) => {
  res.send('API Documentation');
});
router.use('/contact', contactsRoute);

module.exports = router;
