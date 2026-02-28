import express from "express";
import path from "path";

const app = express();

const abspath = path.resolve("views");
const publicPath = path.resolve("public");
app.use(express.static(publicPath));
// console.log(abspath);
console.log(publicPath);

app.get("/homepage", (req, res) => {
    // console.log(__dirname); //its not working in ES Module 
     const abspath = path.resolve("views/homePage.html");
    // console.log(abspath);

    res.sendFile(abspath);
});

app.get("/login", (req, res) => {
    // const abspath = path.resolve("views/login.html");
    // console.log(abspath);
    
    res.sendFile(abspath + "/login.html");
});

app.post("/loginSuccess", (req, res) => {
    // const abspath = path.resolve("views/loginSuccess.html");
    // console.log(abspath);

    res.sendFile(abspath + "/loginSuccess.html");
});

app.use((req, res) => {
    // const pageNotFoundPath = path.resolve("views/404.html");
    res.status(404).sendFile(abspath+"/404.html");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});