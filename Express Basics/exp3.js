const express = require('express')                                  // post
const app = express()
port = 3000

// app.use(express.json())

// app.post('/data', (req, res) => {
//     res.json({ message: 'Received!', data: req.body })
// })

// app.listen(port, () => 
//     console.log(`Server is running at http://localhost:${port}`))


app.use(express.json())
app.put('/update/:id', (req, res) => {                                             // update
    res.json({ message: `Updated record ${req.params.id}`, newData: req.body })
})



app.use(express.json())                        // Patch
let users = [
    {id : 1, name : "Manoj"},
    {id : 2, name : "kumar"}
]

// app.patch('/modify/:id', (req, res) => {
//     const userId = parseInt(req.params.id)
//     const updateData = req.body

//     let user = users.find(u => u.id === userId)
//     if (!user) {
//         return res.status(404).json({ message: "User not found" })
//     }
//     Object.assign(user, updateData)

//     res.json({ message: `User ${userId} updated`, user })
// })

// app.listen(port, () => 
//     console.log(`Server is running at http://localhost:${port}`))


app.delete('/delete/:id', (req, res) => {                                       // delete
    const userId = parseInt(req.params.id)

    // Find the index of the user
    const userIndex = users.findIndex(user => user.id === userId)

    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" })
    }

    // Remove the user from the array
    users.splice(userIndex, 1)

    res.json({ message: `User ${userId} deleted successfully`, users })
})
app.listen(port, () => 
    console.log(`Server is running at http://localhost:${port}`))



