const router = require("express").Router()
const authRouter = require("./authRoute")
const adminRouter = require("./adminRoute")
const postRouter = require("./postRoute")
const flashMessage = require("../utils/flash")
const postUserMessage = require("../controllers/messageController")
const messageValidator = require("../validators/messageValidator")




router.use(authRouter)
router.use(adminRouter)
router.use(postRouter)



router.get("/", (req, res, next) => { 
    res.render("pages/index.ejs", {
        flash: flashMessage(req),
        error: ""
    })
})
router.post("/", messageValidator, postUserMessage)


 
router.use((req, res, next) => {
    res.render("pages/error/404")
})
router.use((err, req, res, next) => {
    console.log(err.message);
    res.render("pages/error/500")
})


module.exports = router;