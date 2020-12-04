const fetch = require("node-fetch")
exports.weather= function(req,res,next){

    res.set("Content-Type", "application/json") // server will answer with JSON
    res.set("Access-Control-Allow-Origin", "*") // to prevent cross origin error

    key = "9361f6c2de9f59e63bab81a4d931e009"
    city = req.body.city

    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key).then(
    (d) =>{d.json().then((obj) => {
      res.send(JSON.stringify(obj))
      console.log(obj)
     })}).catch(err => console.log(err))
}