import express from "express";

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


app.get("/login", (req, res) => {
    res.render("login");
});


app.post("/profile", (req, res) => {
    res.setHeader('Set-Cookie', "login = true");
    res.setHeader('Set-Cookie', "name = " + req.body.name);
    res.render("profile");
});

app.get("/welcome", (req, res) => {

    let cookiesData = req.get("Cookie");
    

    cookiesData = cookiesData.split(";");
    cookiesData = cookiesData[1].split("=");
    

    console.log(cookiesData[1]);

    res.render("welcome", {name: cookiesData[1]});
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});