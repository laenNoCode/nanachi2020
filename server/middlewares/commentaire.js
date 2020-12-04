const { request } = require("express")

exports.importation = async function(req,res,next){
    const sqlite = require("sqlite3").verbose()

    bodyKeys = Object.keys(req.body)
    if (bodyKeys.includes("beach")){
        let db = new sqlite.Database("./database/data.db", (err) => {
            if (err){
                console.log(err)
            }
        })
        if (! /^([a-z0-9A-Z]{1,})$/.test(req.body.beach))
        {
            res.set("Content-type", "application/JSON")
            res.set("Access-Control-Allow-Origin", "*")
            res.json({"error": "beach is not allowed"})
            return false
        }
        
        var request1 = "SELECT beachID FROM beach WHERE name= '"  + req.body.beach + "'"
        db.all(request1, (err,data) => {
            if (err){
                console.log(err)
            }
            if (data[0] == undefined ){
                res.set("Content-type", "application/JSON")
                res.set("Access-Control-Allow-Origin", "*")
                res.json({"error": "unknown beach"})
                return false
            } else {
                var request2 = "SELECT * FROM userBeachComment WHERE beachID="  + data[0]["beachID"]
                db.all(request2, (err,data) => {
                    res.set("Content-type", "application/JSON")
                    res.set("Access-Control-Allow-Origin", "*")
                    res.send(JSON.stringify(data))
                })
            }   
        })
    }
}



exports.publication = async function(req,res,next){
    const sqlite = require("sqlite3").verbose()

    bodyKeys = Object.keys(req.body)
    if (bodyKeys.includes("userID") && bodyKeys.includes("beachID")){
        let db = new sqlite.Database("./database/data.db", (err) => {
            if (err){
                console.log(err)
            }
        })
        
        if (! /^([a-z0-9A-Z]{4,})$/.test(req.body.comment))
        {
            res.set("Content-type", "application/JSON")
            res.set("Access-Control-Allow-Origin", "*")
            res.json({"error": "special caracters are not allowed in the comment section"})
            return false
        } 
        values = req.body.userID + "','" + req.body.beachID + "','"+ req.body.date + "','" + req.body.clean + "','" +  req.body.wave + "','" +  req.body.comment + "','" + req.body.annonymous
        
        var request = "INSERT INTO userBeachComment(userID, beachID, date, clean,wave,comment,anonymous) VALUES ('" + values + "')"
        db.serialize(() =>{
        db.run(request)
        res.set("Content-type", "application/JSON")
        res.set("Access-Control-Allow-Origin", "*")
        res.json({"success": "successfully created comment"})
        res.send()
        })

    }

}