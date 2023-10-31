require('dotenv').config()
require("./config/database")
const express = require("express")
const router = require("./routes/router")
const middlewares = require("./middleware/middleware")
const app = express()
const port = process.env.PORT || 3000
const path = require('path')


// app.set("view engine", "ejs")
// app.set("views", "views")
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);

app.use(middlewares)
app.use(router)
  
app.listen(port, () => {
    console.log("Server running at http://localhost:"+port);
}) 