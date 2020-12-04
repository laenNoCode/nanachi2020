base64url="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
const crypto = require("crypto")
exports.login = async function(req,res,next){
    console.log(req.session.id)
    bodyKeys = Object.keys(req.body)
    console.log(JSON.stringify(req.session))
    console.log({bodyKeys,in:bodyKeys.includes("username")})
    exists = false
    if (bodyKeys.includes("username") && bodyKeys.includes("password")){
        const sqlite = require("sqlite3").verbose()
        let db = new sqlite.Database("./database/data.db", (err) => {
            if (err){
                console.log(err)
            }
        })
        db.serialize(() => {
            db.each("SELECT * FROM user", (err,data) => {
                if (data.username == req.body.username ){
                    const hash = crypto.createHmac('sha256', req.body.password).update(data.salt).digest('hex');
                    
                    if (data.hash == hash){
                        req.session.id = data.id
                        console.log("found")
                        console.log("sending response")
                        res.set("Content-type", "application/JSON")
                        res.set("Access-Control-Allow-Origin", "*")
                        res.send(JSON.stringify({"success": "user identified"}))
                        res.end()
                    }
                    
                }
            })
        })
        
        
        db.close()
        
        
    }
    
}

exports.create = function(req,res,next){
    
    const sqlite = require("sqlite3").verbose()

    bodyKeys = Object.keys(req.body)
    if (bodyKeys.includes("username") && bodyKeys.includes("password")){
        let db = new sqlite.Database("./database/data.db", (err) => {
            if (err){
                console.log(err)
            }
        })
        exists = false
        salt = ""
        data = res.headersSent
        console.log({sent:data})
        db.each("SELECT * FROM user", (err,data) => {
            if (! res.headersSent &&  data.username == req.body.username ){
                data = res.headersSent
                console.log({sent:data})
                console.log("username already taken")
                res.set("Content-type", "application/JSON")
                res.set("Access-Control-Allow-Origin", "*")
                res.send(JSON.stringify({"error": "user name already exists"}))
                exists = true
            }
        })

        
        if (exists)
            return false
        console.log(exists)
        //checks if username is a valid string
        if (! /^([a-z0-9A-Z]{4,})$/.test(req.body.username))
        {
            res.set("Content-type", "application/JSON")
            res.set("Access-Control-Allow-Origin", "*")
            res.json({"error": "user name not allowed"})
            return false
        }
        for (i = 0; i < 16; ++i){
            j = Math.floor(Math.random() * 64)
            salt += base64url[j]
        }
        console.log("creating hash")
        const hash = crypto.createHmac('sha256', req.body.password).update(salt).digest('hex');
        request = "INSERT INTO user(username, salt, hash) VALUES ('" + req.body.username + "','" + salt + "','" + hash + "')"
        console.log(request)
        db.run(request)
        
        db.close()

    }
    //next()
}