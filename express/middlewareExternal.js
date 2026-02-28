import express from 'express';
import path from 'path';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev')); //this is middleware for logging request details in console
app.get("/abc", (req, res) => {
    res.send("<h1>Hello this is Home page</h1>");
});


app.get("/login", (req, res) => {
     res.send(`<form action="/submit" method="post">
        <input type="text" name="username" placeholder="Username" required><br/>
        <input type="password" name="password" placeholder="Password" required><br/>
        <button type="submit">Login</button>
        </form>`);
});

app.get("/users", (req,res) => {
    res.send("<h2>Hello this is users page</h2>");
})

app.post("/submit", (req,res) => {
    console.log("users login details are ", req.body);
    res.send("Hello this is submit page");
})


app.get("/wait", (req,res) => {
    setTimeout(() => {
        res.send("page is loaded after 1 second");
    }, 1000);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});