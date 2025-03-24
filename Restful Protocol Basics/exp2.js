// HEAD
app.head("/users", (req, res) => {
    res.set("Content-Length", JSON.stringify(users).length)
    res.status(200).end()
})

//specfic user
app.head("/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id))
    if (!user) return res.status(404).end()
    res.status(200).end()
})




app.options("/users", (req, res) => {
    res.set("Allow", "GET, POST, HEAD, OPTIONS");
    res.status(204).end();
});


app.options("/users/:id", (req, res) => {
    res.set("Allow", "GET, PUT, PATCH, DELETE, HEAD, OPTIONS");
    res.status(204).end();
});