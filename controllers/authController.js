const User = require("../model/user")
const flashMessage = require("../utils/flash")

const getRegister = (req, res, next) => {
    res.render("pages/auth/registration.html", {
        flash: flashMessage(req),
        value: {},
        error: {}
    })
}
const getLogin = (req, res, next) => {
    res.render("pages/auth/login.html", {
        flash: flashMessage(req),
        value: {},
        error: {}
    })
}


const postRegister = async (req, res, next) => {
    const {name, email, password} = req.body
    const creatUser = new User({
        name,
        email,
        password
    })

    
    try {
        const user = await User.findOne({email})
        if(user) {
            return res.render("pages/auth/registration.html",{
                error: {
                    email: "User Already Exist",
                    value: {name,email},
                },
                flash: flashMessage(req),
                value: {name, email}
            })
        }

        req.flash("success", "User Sccessfully Created")
        await creatUser.save()
        res.redirect("login")      
    } catch (e) {
        console.log(e);
    }
}


const postLogin = async (req, res, next) => {
    const {email, password} = req.body

    try {
        const user = await User.findOne({email})
        if(!user) {
            return res.render("pages/auth/login.html", {
                error: {
                    email: "User not found"
                },
                value: {email},
                flash: flashMessage(req)
            })
        }
        if(password !== user.password) {
            return res.render("pages/auth/login.html", {
                error: {
                    password: "Password not match"
                },
                value: {email},
                flash: flashMessage(req)
            })
        }
    
        req.flash("success", "Login successfully")
        req.session.isLogin = true
        req.session.user = user
        req.session.save((err) => {
            err ? next(e) : res.redirect("/") ;
        })
        
    } catch (e) {
        console.log(e);
    }
}

const authenticated = (req, res, next) => {
    if(!req.session.isLogin) {
        return next()
    }

    res.redirect("/")
}

const isLoggedIn = (req, res, next) => {
    if(req.session.isLogin) {
        return next()
    }
    res.redirect("login")
}
const logout = (req, res, next) => {
    req.session.destroy((err) => {
        if(err) {
            console.log(err);
            return next(err)
        }
    })
    res.redirect("/")
}


module.exports = {getRegister, getLogin, postRegister, postLogin, authenticated, isLoggedIn, logout}