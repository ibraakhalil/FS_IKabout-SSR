const router = require("express").Router()
const authRouter = require("./authRoute")
const adminRouter = require("./adminRoute")
const flashMessage = require("../utils/flash")
const postUserMessage = require("../controllers/messageController")



router.use(authRouter)
router.use(adminRouter)




router.get("/", (req, res, next) => { 
    res.render("pages/index", {
        flash: flashMessage(req)
    })
})
router.post("/", postUserMessage)


 
router.use((req, res, next) => {
    res.render("pages/error/404")
})
router.use((err, req, res, next) => {
    console.log(err.message);
    res.render("pages/error/500")
})


module.exports = router;