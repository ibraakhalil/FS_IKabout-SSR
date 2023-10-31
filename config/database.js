require("dotenv").config()
const mongoose = require("mongoose")
const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/ikabout"

mongoose.connect(dbUrl, () => {
    console.log("Database is Connected")
})  
 
 