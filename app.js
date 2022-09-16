require("dotenv").config()
require("./config/database")
const express = require("express")
const router = require("./routes/router")
const middlewares = require("./middleware/middleware")
const app = express()
const port = process.env.PORT || 3000


app.set("view engine", "ejs")
app.set("views", "views")
app.use(middlewares)
app.use(router)
  
app.listen(port, () => {
    console.log("Server running at http://localhost:"+port);
}) 