const jwt = require ("jsonwebtoken")    //role based access
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNYW5vaiIsInVzZXJuYW1lIjoibWFub2oxMjNAbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NDI1NTc3NzgsImV4cCI6MTc0MjU2NDk3OH0.5dIGBlGybInLoloYI33wOkIuZ-l3kndb_zPzWD9SGT4"
const secretKey = "hifi"

try {
    const decode = jwt.verify(token, secretKey)
    if (decode.role === "admin"){
        console.log("Permission Granted")
    }else{
        console.log('error')
    }
}catch(error){
    console.log('invalid token :', error.message)
}