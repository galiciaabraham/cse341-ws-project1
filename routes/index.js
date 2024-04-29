const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello! This message means the API is up and running');
});

module.exports = router;
