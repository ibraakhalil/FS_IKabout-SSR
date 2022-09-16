const router = require("express").Router()
const { getRegister, postRegister, getLogin, postLogin, logout, authenticated } = require("../controllers/authController")






router.get("/register", authenticated, getRegister)
router.post("/register", authenticated, postRegister)

router.get("/login", authenticated, getLogin)
router.post("/login", authenticated, postLogin)

router.get("/logout", logout)



module.exports = router;