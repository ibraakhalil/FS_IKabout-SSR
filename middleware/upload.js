const multer = require("multer")



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + file.originalname)
    }
})


const upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
})


module.exports = upload