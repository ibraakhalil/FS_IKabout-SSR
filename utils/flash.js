const flashMessage = (req) => {
    return {
        success: req.flash("success"),
        fail: req.flash("fail")
    }
}

module.exports = flashMessage;