// @desc Register User
//@route POST /api/users/register
//@access public

const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async(req,res)=>{
    res.json({message:'Register a User'})
})

module.exports = {registerUser}