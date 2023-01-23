const router = require("express").Router()
const { isLoggedIn } = require("../controllers/authController");
const { getCreatePost, postCreatePost, getBlog } = require("../controllers/postController");
const upload = require("../middleware/upload");


router.get("/blog", getBlog)

router.get("/create-post", isLoggedIn, getCreatePost)
router.post("/create-post", isLoggedIn, upload.single("thumbnail") , postCreatePost)


module.exports = router; 