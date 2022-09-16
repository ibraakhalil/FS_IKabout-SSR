require("dotenv").config()
const express = require("express")
const flash = require("connect-flash")
const session = require("express-session")
const setLocals = require("./setLocals")
const mongoStore = require("connect-mongodb-session")(session)


const store = new mongoStore({
    uri: process.env.DB_URL,
    collection: "session"
})


const middlewares = [
    express.urlencoded({extended:true}),
    express.json(),
    express.static("public"),
    session({
        store,
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
        cookie:{
            maxAge: 1000 * 3600 * 24 * 7
        }
    }),
    setLocals,
    flash()
]
 


module.exports = middlewares;