const express = require('express')

const router = express.Router()

// Route to get all contact
router.route('/').get((req,res)=>{
    res.status(200).json({message:'Get All Contacts'})
})

// Route to create a contact
router.route('/').post((req,res)=>{
    res.status(200).json({message:'Create Contacts'})
})

// Route to get a particular contact
router.route('/:id').get((req,res)=>{
    res.status(200).json({message:`Get contact for ${req.params.id}`})
})

// Route to update contact
router.route('/:id').put((req,res)=>{
    res.status(200).json({message:`Update contacts for ${req.params.id}`})
})

// Route to delete a contact
router.route('/:id').delete((req,res)=>{
    res.status(200).json({message:`Delete contacts for ${req.params.id}`})
})

module.exports = router