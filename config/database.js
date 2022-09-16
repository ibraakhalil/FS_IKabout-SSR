require("dotenv").config()
const mongoose = require("mongoose")
const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/ikabout"

mongoose.connect(dbUrl, () => {
    console.log("Database is Connected")
}) 

 