const express = require("express")
const app = express()
app.use(express.json()) //middleware


let users = [
    { id: 1, name: "Manoj", email: "manoj123@.com" },
    { id: 2, name: "Kumar", email: "kumar567@.com" }
]

// GET  
app.get("/users", (req, res) => {
    res.json(users)
})


app.get("/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id))
    if (!user) return res.status(404).json({ error: "User not found" })
    res.json(user)
})

// POST
app.post("/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    }
    users.push(newUser)
    res.status(201).json(newUser)
})

// PUT
app.put("/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id))
    if (!user) return res.status(404).json({ error: "User not found" })

    user.name = req.body.name
    user.email = req.body.email
    res.json(user)
})

// PATCH
app.patch("/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id))
    if (!user) return res.status(404).json({ error: "User not found" })

    if (req.body.name) user.name = req.body.name
    if (req.body.email) user.email = req.body.email

    res.json(user)
})

// DELETE
app.delete("/users/:id", (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id))
    res.json({ message: "User deleted successfully" })
})

// Start server
const PORT = 3000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
