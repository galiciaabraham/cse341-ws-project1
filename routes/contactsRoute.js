const express = require('express');
const router = express.Router();
const contactsController = require('../controller/contactsController');

router.get('/', contactsController.getAll);
router.get('/:contactId', contactsController.getSingle);

router.post('/new-contact', contactsController.addContact);
router.put('/update-contact/:contactId', contactsController.updateContact);

router.delete('/delete-contact/:contactId', contactsController.deleteContact);

module.exports = router;
