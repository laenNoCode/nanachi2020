const express = require("express")
const bodyParser = require("body-parser")
const databaseCreator = require("./database/databaseCreator")
const session = require("./middlewares/laenSession/session")

databaseCreator.createDB("./database/data.db").then(()=>{
  console.log("database created")
}).catch()


var app = express()
var login = require("./middlewares/login")
var weather = require("./middlewares/weather")
var commentaire = require("./middlewares/commentaire")

app.use(bodyParser.urlencoded({
    extended: false
  }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(session.session)

app.post("/api/weather", weather.weather)
app.post("/api/createLogin",login.create)
app.post("/api/login",login.login)
app.post("/api/commentaire",commentaire.publication)
app.post("/api/importCommentaire",commentaire.importation)
app.post("/api/meanCommentaire",commentaire.mean)


app.use(express.static("./public"))
console.log("server started")
app.listen("8080")