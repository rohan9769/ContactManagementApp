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
    // Step 1 : Fetch the email address and password

    const {email,password} = req.body //1
    if(!email || !password){
        res.status(400)
        throw new Error("All fields are required")
    }
    //checking if user already exists,if it exists then we compare the password in the db and the password we recieved from the client
    const user = await User.findOne({email})
    //comparing password in db with hashed password
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken = jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id
            } // payload

        },process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"2m"}
        )
        res.status(200).json({accessToken})
    }
    else{
        res.status(401)
        throw new Error("email or password is not valid")
    }
    res.json({message:'Login User'})
})

//@desc Current User
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async(req,res)=>{
    res.json({message:'Current User'})
})

module.exports = {registerUser,loginUser,currentUser}