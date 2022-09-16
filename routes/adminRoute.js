const router = require("express").Router()
const { getAdmin, authenticateAdmin } = require("../controllers/adminController");



router.get("/admin", authenticateAdmin, getAdmin)


module.exports = router;