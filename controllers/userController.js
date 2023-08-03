const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// @desc Register User
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async(req,res)=>{
    const {username,email,password} = req.body
    if(!username || !email || !password){
        res.status(400)
        throw new Error("All fields are required !!")
    }
    // Checking weather we already have a user registerd or not , if not create a new user but Hash the password
    const userAvailable = await User.findOne({email})
    if(userAvailable){
        res.status(400)
        throw new Error("User already registered")
    }
    
    //Hashing password using bcrypt
    const hashedPassword = await bcrypt.hash(password,10)
    console.log('hashed password : ',hashedPassword)

    //Creating a new user
    const user = await User.create({
        username,
        email,
        password:hashedPassword
    })
    console.log('User created :',user)
    if(user){
        res.status(201).json({_id:user.id,email:user.email})
    }
    else{
        res.status(400)
        throw new Error('User data is not valid')
    }
    res.json({message:'Register a User'})
})

//@desc Login User
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async(req,res)=>{
    // Implementing login functionality
    // start here
    res.json({message:'Login User'})
})

//@desc Current User
//@route GET /api/users/current
//@access public
const currentUser = asyncHandler(async(req,res)=>{
    res.json({message:'Current User'})
})

module.exports = {registerUser,loginUser,currentUser}