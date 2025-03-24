const express = require('express');
const app = express();

app.use((req, res, next) => {                                                // Middleware function
    console.log(`Request received at ${new Date().toISOString()}`);
    next();
});

app.get('/', (req, res) => res.send('Middleware Example'));

app.listen(3000, () => console.log('Server running on port 3000'));



//method 2

// const express = require('express')
// const app = express()
// const Middleware = (req,res,next) => {
//     console.log(`Request received at ${new Date().toISOString()}`)
//     next()
// }

// app.use(Middleware)
// app.get('/', (req,res) => res.send("Welcome"))
// app.listen(3000, () => console.log('server running on port 3000 '))


