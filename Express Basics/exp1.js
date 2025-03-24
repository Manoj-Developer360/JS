const express = require('express')    // initial 
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('Welcome!')
})
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})




app.get('/user', (req, res) => {              //get method
    res.send('This is a GET request')
})

