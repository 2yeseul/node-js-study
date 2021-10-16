const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const users = [
    {id: 1, name: "user1"},
    {id: 2, name: "user2"}
];

app.get("/", (req, res) => {
    res.send("Hello word");
})

app.listen(3300, () => console.log("hello"));

app.get("/api/users", (req, res) => {
    res.json({ok: true, users: users});
})

app.get("/api/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) res.status(404).send('user was not found');

    res.json({ok: true, user: user});
})