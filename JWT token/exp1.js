const jwt = require('jsonwebtoken')  // generate token
const payload = {
    userId: 'Manoj',
    username: 'manoj123@mail.com',
    role: 'admin'
}
const secretKey = 'hifi'
const token = jwt.sign(payload, secretKey, { algorithm: 'HS256', expiresIn: '2h' })
console.log('Generated JWT:', token)