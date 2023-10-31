const { body } = require("express-validator")



const messageValidator = [
    body("name")
        .isLength({ min: 3, max: 24 }).withMessage("Name must be greater than 3 charts")
        .trim()
    ,
    body("email")
        .isEmail().withMessage("Please Provide Valid email!")
        .trim()
        .normalizeEmail()
    ,
    body("message")
        .isLength({ min: 1 }).withMessage("Message can't Empty")
]



module.exports = messageValidator
