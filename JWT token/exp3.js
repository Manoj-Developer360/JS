const jwt = require('jsonwebtoken');    //refresh token
const SECRET_KEY = "hifi";
const oldToken = jwt.sign({ username: "Manoj" }, SECRET_KEY, { expiresIn: "20s" });
const refreshToken = (token) => {
    try {
        const decoded = jwt.verify(token, SECRET_KEY, { ignoreExpiration: true }); 
        return jwt.sign({ username: decoded.username }, SECRET_KEY, { expiresIn: "1h" });
    } catch (err) {
        return null;
    }
};
setTimeout(() => {
    const newToken = refreshToken(oldToken);
    console.log("Refreshed Token:", newToken);
}, 10000); 