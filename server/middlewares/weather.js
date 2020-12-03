const fetch = require("node-fetch")
exports.weather= function(req,res,next){
    res.set("Content-Type", "application/json")
    res.set("Access-Control-Allow-Origin", "*")
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=9361f6c2de9f59e63bab81a4d931e009").then(
  (d) =>{d.json().then((obj) => {
      res.send(JSON.stringify(obj))
  console.log(obj)
})})
}