const mongoose = require('mongoose')

const randomSchema = mongoose.Schema({
    randmname:{
        type:String,
        required:[true,"Name is required"]
    }
})

module.exports = mongoose.model("Random",randomSchema)