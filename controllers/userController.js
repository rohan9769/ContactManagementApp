

const asyncHandler = require("express-async-handler");
// @desc Register User
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async(req,res)=>{
    const {username,email,password} = req.body
    res.json({message:'Register a User'})
})

//@desc Login User
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async(req,res)=>{
    res.json({message:'Login User'})
})

//@desc Current User
//@route GET /api/users/current
//@access public
const currentUser = asyncHandler(async(req,res)=>{
    res.json({message:'Current User'})
})

module.exports = {registerUser,loginUser,currentUser}