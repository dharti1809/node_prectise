import express from "express";
import session from "express-session";

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'apple',
}))

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/profile", (req, res) => {
    req.session.data = req.body;
    console.log(req.session.data);
    res.render("profile");
});


app.get("/welcome", (req, res) => {

    const data = req.session.data;
    console.log(data);
    res.render("welcome", {data});
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});