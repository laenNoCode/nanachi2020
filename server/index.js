const express = require("express")
const bodyParser = require("body-parser")
var app = express()
var login = require("./middlewares/login")

app.use(bodyParser.urlencoded({
    extended: false
  }));
app.use(bodyParser.json());
app.use(login.login)
app.use(express.static("./public"))


app.listen("8080")