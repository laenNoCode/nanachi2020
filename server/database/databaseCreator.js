exports.createDB = async function(path){
    const sqlite = require("sqlite3").verbose()
    console.log("starting app, creating uncreated databases")
    let db = new sqlite.Database(path, (err) => {
        if (err){
            console.log(err)
        }
    })
    db.run("CREATE TABLE IF NOT EXISTS user(userID INTEGER PRIMARY KEY AUTOINCREMENT,username TEXT, salt TEXT, hash TEXT)")
    db.run("CREATE TABLE IF NOT EXISTS userInfo(userID INTEGER, name TEXT, email TEXT)")
    db.run("CREATE TABLE IF NOT EXISTS beach(beachID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)")
    db.run("CREATE TABLE IF NOT EXISTS userBeach(userID INTEGER, beachID INTEGER)")
    db.run("CREATE TABLE IF NOT EXISTS userBeachComment(userID INTEGER, beachID INTEGER,date DATE, clean INTEGER, wave INTEGER, comment TEXT, anonymous BOOLEAN)")

    db.each("SELECT COUNT(*) FROM beach", (err, data) => {
       if (data['COUNT(*)'] == 0){
        request = "INSERT INTO beach(name) VALUES ('Maseille') "
        db.run(request)
        request = "INSERT INTO beach(name) VALUES ('Paimpole') "
        db.run(request)
       }
    })


    db.close()
};