const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        maxlength: 20
    },    
    email:{
        type: String,
        required: true,
        trim: true
    },   
    password:{
        type: String,
        required: true
    },
    posts: []
})


module.exports = mongoose.model("User", userSchema)