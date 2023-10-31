const Message = require("../model/message")
const { validationResult } = require("express-validator");
const flashMessage = require("../utils/flash");
const postUserMessage = (req, res, next) => {

    const errors = validationResult(req).formatWith(err => err.msg)
    if(!errors.isEmpty()) {
        req.flash("fail", "Check Your Form!")
        return res.render("pages/index.ejs", {
            flash: flashMessage(req),
            error : errors.mapped()
        })
    }

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