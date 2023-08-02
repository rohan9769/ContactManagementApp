//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContact = (req,res) =>{
    res.staus(200).json({message:`Get all contacts`})
}

module.exports = {getContact}