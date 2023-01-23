const mongoose = require("mongoose")


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    tags: {
        type: String
    },
    thumbnail: String,
    comment: [],
    like: [],
    dislike: []
})


module.exports = mongoose.model("Post", postSchema)