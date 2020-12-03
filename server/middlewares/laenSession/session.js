base64url="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
config = require("./config.json")

async function refresh(sess, now){
    for (key of Object.keys(sess.sessions))
    {
        actualSession = sess.sessions[key]
        if (actualSession.date + actualSession.maxAge < now){
            sess.sessions[key] = undefined
            delete(sess.sessions[key])
        }
    }
}

function session(req, res, next){
    now = Math.floor(Date.now()/1000)
    if (session.sessions === undefined)
        session.sessions = {}
    if (session.lastRefresh === undefined)
        session.lastRefresh = now
    if (now - session.lastRefresh >= config.refreshRate)
    {
        refresh(session, now)
        session.lastRefresh = now
    }
    sessionCookie = false;
    req.headers.cookie.replace(" ", "").split(";").forEach((cookie) => {
        if (cookie.includes(config.sessionName)){
            sessionCookie = cookie.split(config.sessionName + "=")[1]
            if (session.sessions[sessionCookie] === undefined){
                sessionCookie = false
            }else{
                sessionCookie = session.sessions[sessionCookie]
            }
        }
    })

    if (sessionCookie !==false){
        req.session = sessionCookie.session
        res.setHeader("Set-Cookie", config.sessionName + "="+ cookie + ";HttpOnly;Max-Age=" + config.sessionTime)
        sessionCookie.date = now
        sessionCookie.maxAge = config.sessionTime
    }else{
        exists = true
        while(exists){
            cookie = ""
            for (i = 0; i < 64; ++i){
                j = Math.floor(Math.random() * 64)
                cookie += base64url[j]
            }
            if (session.sessions[cookie] === undefined)
                exists = false
        }
        session.sessions[cookie] = {maxAge:config.sessionTime, session:{}, date:now}
        res.setHeader("Set-Cookie", "laenSession="+ cookie + ";HttpOnly;Max-Age=" + config.sessionTime)
        req.session = session.sessions[cookie].session
    }
    
    next()
}

exports.session = session