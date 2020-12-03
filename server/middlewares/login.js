base64url="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
exports.login = function(req,res,next){
    
    bodyKeys = Object.keys(req.body)
    console.log({bodyKeys,in:bodyKeys.includes("username")})
    if (bodyKeys.includes("username") && bodyKeys.includes("password")){
        console.log("user can log in")
        console.log(req.body)
    }
    next()
}

exports.create = function(req,res,next){
    const sqlite = require("sqlite3").verbose()
    const crypto = require("crypto")

    bodyKeys = Object.keys(req.body)
    console.log({bodyKeys,in:bodyKeys.includes("password")})
    if (bodyKeys.includes("username") && bodyKeys.includes("password")){
        console.log("in")
        let db = new sqlite.Database("./database/data.db", (err) => {
            if (err){
                console.log(err)
            }
        })
        db.each("SELECT * FROM user", (data) => {
            console.log(data)
        })
        salt = ""
        for (i = 0; i < 16; ++i){
            j = Math.floor(Math.random() * 64)
            salt += base64url[j]
        }
        console.log("creating hash")
        const hash = crypto.createHmac('sha256', req.body.password).update(salt).digest('hex');
        request = "INSERT INTO user(username, salt, hash) VALUES (`" + req.body.username + "`,`" + salt + "`,`" + hash + "`)"
        console.log(request)
        db.run(request)

        db.close()

    }
    next()
}