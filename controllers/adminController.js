const Message = require("../model/message")
const flashMessage = require("../utils/flash")


const getAdmin = async (req, res, next) => {

    const allMessage = await Message.find()

    res.render("pages/auth/admin", {
        flash: flashMessage(req),
        allMessage
    })
}

const authenticateAdmin = (req, res, next) => {
    if(req.session.isLogin) {
        const userEmail = req.session.user.email
        if(userEmail === "ibrahim@gmail.com") {
            return next()            
        }
    }

    res.redirect("/")
}

module.exports = {getAdmin, authenticateAdmin} 