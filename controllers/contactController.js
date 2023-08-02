//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContact = (req,res) =>{
    res.staus(200).json({message:`Get all contacts`})
}

//@desc Create new contact
//@route POST /api/contacts
//@access public
const createContact = (req,res) =>{
    res.staus(201).json({message:`Create new contact`})
}

module.exports = {getContact,createContact}