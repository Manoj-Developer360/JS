const express = require('express')
const app = express()
port = 3000

app.use((req, res, next) => {                                           //HEAD
    console.log(`${req.method} request received for ${req.url}`)
    next()
})


app.head('/headers', (req, res) => {
    res.set('Custom-Header', 'ExpressJS')
    res.status(200).end()                        
})

app.listen(port, () => 
    console.log(`Server is running at http://localhost:${port}`))








app.options('/info', (req, res) => {                                     //OPTIONS
    res.set('Allow', 'GET, POST, OPTIONS')
    res.send('Allowed methods: GET, POST, OPTIONS')
})

app.listen(port, () => 
    console.log(`Server is running at http://localhost:${port}`))