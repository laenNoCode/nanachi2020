exports.importation = async function(req,res,next){
    const sqlite = require("sqlite3").verbose()

    bodyKeys = Object.keys(req.body)
    if (bodyKeys.includes("beach")){
        let db = new sqlite.Database("./database/data.db", (err) => {
            if (err){
                console.log(err)
            }
        })
        if (! /^([a-z0-9A-Z])$/.test(req.body.beach))
        {
            res.set("Content-type", "application/JSON")
            res.set("Access-Control-Allow-Origin", "*")
            res.json({"error": "beach n'a pas le bon format"})
            return false
        }
        console.log(req.body.beachID)
        request = "SELECT * FROM userBeachComment WHERE beachID="  + req.body.beachID
        db.all(request, (err,data) => {
                console.log(data)
                res.set("Content-type", "application/JSON")
                res.set("Access-Control-Allow-Origin", "*")
                res.send(JSON.stringify(data))

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
        
        request = "INSERT INTO userBeachComment(userID, beachID, date, clean,wave,comment,anonymous) VALUES ('" + values + "')"
        db.serialize(() =>{
        db.run(request)
        res.set("Content-type", "application/JSON")
        res.set("Access-Control-Allow-Origin", "*")
        res.json({"success": "successfully created comment"})
        res.send()
        })

    }

}