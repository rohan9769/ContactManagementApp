const asyncHandler = require('express-async-handler')

const getRandoms = asyncHandler(async(req,res)=>{
    res.json({message:'Get Random'})
})

module.exports = {getRandoms}