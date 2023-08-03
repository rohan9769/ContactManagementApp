const asyncHandler = require('express-async-handler')

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req,res) =>{
    res.staus(200).json({message:`Get all contacts`})
}

//@desc Create new contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req,res) =>{
    console.log(req.body)
    const {name,email,phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    res.status(201).json({message:`Create new contact`})
})

//@desc Get a particular contact by ID
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req,res) =>{
    res.status(200).json({message:`Get contact for ${req.params.id}`})
})

//@desc Update a particular contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`Update contacts for ${req.params.id}`})
})

//@desc Update a particular contact
//@route PUT /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`Delete contacts for ${req.params.id}`})
})
module.exports = {getContacts,createContact,getContact,updateContact,deleteContact}

