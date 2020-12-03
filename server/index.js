const express = require("express")
const bodyParser = require("body-parser")
const databaseCreator = require("./database/databaseCreator")

databaseCreator.createDB("./database/data.db").then(()=>{
  console.log("database created")
}).catch()


var app = express()
var login = require("./middlewares/login")

app.use(bodyParser.urlencoded({
    extended: false
  }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(login.login)
app.use(login.create)

app.use(express.static("./public"))
console.log("server started")
app.listen("8080")