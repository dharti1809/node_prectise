import express from 'express';

const app = express();


app.get("/", (req, res) => {
    res.send("Hello this is login page");
});

app.get("/login", (req, resp) => {
    resp.send(`<form action="/submit" method="post">
        <input type="text" name="username" placeholder="Username" required><br/>
        <input type="password" name="password" placeholder="Password" required><br/>
        <button type="submit">Login</button>
        </form>`);
});

app.post("/submit", (req,resp) => {
    resp.send("Form submitted successfully");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});