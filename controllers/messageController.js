const Message = require("../model/message")

const postUserMessage = (req, res, next) => {
    const {name, email, message} = req.body

    const newMessage = new Message({
        name,
        email,
        message
    })

    newMessage.save((err)=> {
        if(err) {
            console.log(err);
        }
    })
    
    req.flash("success", "Message Successfully Sent")
    res.redirect("/")
}


module.exports = postUserMessage;