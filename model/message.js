const mongoose = require("mongoose")


const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 24
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        maxlength: 500,
        required: true
    }
})


module.exports = mongoose.model("Message", messageSchema)