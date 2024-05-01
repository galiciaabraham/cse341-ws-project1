const express = require('express');
const router = express.Router();
const contactsController = require('../controller/contactsController');

router.get('/', contactsController.getAll);
router.get('/:contactId', contactsController.getSingle);

router.post('/new-contact', contactsController.addContact);
router.put('/update-contact/:contactId', contactsController.updateContact);

module.exports = router;
