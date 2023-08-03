//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req,res) =>{
    res.staus(200).json({message:`Get all contacts`})
}

//@desc Create new contact
//@route POST /api/contacts
//@access public
const createContact = (req,res) =>{
    res.staus(201).json({message:`Create new contact`})
}

//@desc Get a particular contact by ID
//@route GET /api/contacts/:id
//@access public
const getContact = (req,res) =>{
    res.staus(200).json({message:`Get contact for ${req.params.id}`})
}

//@desc Update a particular contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req,res)=>{
    res.status(200).json({message:`Update contacts for ${req.params.id}`})
}

//@desc Update a particular contact
//@route PUT /api/contacts/:id
//@access public
const deleteContact = (req,res)=>{
    res.status(200).json({message:`Delete contacts for ${req.params.id}`})
}
module.exports = {getContacts,createContact,getContact,updateContact,deleteContact}

