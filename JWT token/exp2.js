const jwt = require ("jsonwebtoken") //verify
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNYW5vaiIsInVzZXJuYW1lIjoibWFub2oxMjNAbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NDI1NTc3NzgsImV4cCI6MTc0MjU2NDk3OH0.5dIGBlGybInLoloYI33wOkIuZ-l3kndb_zPzWD9SGT4"
const secretKey = "hifi"

try {
    jwt.verify(token,secretKey,{ algorithms : ['HS256'] })
    console.log("Token is valid")
}catch (error){
    console.error("token is invalid ",error.message)
}




jwt.verify (token, secretKey, { algorithms : ['HS256']}, (error, decoded) => {              // Verify and Decoded
    if (error) {
        console.error ('Token Verification Failed',error)
    }else{
        console.log ('Decoded Payload', decoded)
    }
} )