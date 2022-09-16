

const setLocals = (req, res, next) => {
    if(req.session) {
        res.locals.isLogin = req.session.isLogin
        res.locals.user = req.session.user
    }
    next()
}

module.exports = setLocals;