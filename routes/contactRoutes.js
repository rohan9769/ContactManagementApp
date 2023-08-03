const express = require('express')
const { getContacts, createContact, getContact, updateContact, deleteContact } = require('../controllers/contactController')

const router = express.Router()

// Route to get all contact
router.route('/').get(getContacts)

// Route to create a contact
router.route('/').post(createContact)

// Route to get a particular contact
router.route('/:id').get(getContact)

// Route to update contact
router.route('/:id').put(updateContact)

// Route to delete a contact
router.route('/:id').delete(deleteContact)

module.exports = router