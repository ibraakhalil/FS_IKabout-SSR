const flashMessage = require("../utils/flash")
const Post = require("../model/post")
const User = require("../model/user")


const getBlog = (req, res, next) => {
    res.render("pages/posts/blog", {
        flash: flashMessage(req),
        error: "",
        value: ""
    })
}

const getCreatePost = (req, res, next) => {
    res.render("pages/posts/createPost", {
        flash: flashMessage(req),
        value: "",
        error: ""
    })
}

const postCreatePost = async (req, res, next) => {
    const {title, body, tags} = req.body

    const post = new Post({
        title,
        body,
        tags,
        thumbnail: "",
        comment: [],
        like: [],
        dislike: []
    })

    try {
        const createPost = await post.save()

        await User.findOneAndUpdate(
            {_id:req.session.user._id},
            {"$push": {posts: createPost._id}}
        )    
        
        res.render("pages/posts/createPost", {
            flash: flashMessage(req),
            value: "",
            error: ""
        })

    } catch (err) {
        console.log(err);
    }
}


module.exports = {getBlog, getCreatePost, postCreatePost}