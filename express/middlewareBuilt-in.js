import express from 'express';
import path from 'path';
const app = express();

const abspath = path.resolve("views/homePage.html");
app.use(express.static(path.resolve("public/"))); //this is middleware for css or js file
app.use(express.urlencoded({ extended: false })); //middleware to parse/show form data 

app.get("/abc", (req, res) => {
    // res.send("<h1>Hello this is Home page</h1>");
    res.sendFile(abspath)
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

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});