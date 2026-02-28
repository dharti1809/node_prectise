import express, { urlencoded } from 'express';
import path from 'path';

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

app.get("/abc", (req, res) => {
    // res.render('home');
    res.render('home', { name: "Dharti Solanki", age: 22, city: "Ahmedabad", student: "IT"})
});

app.get("/add-user", (req,res) => {
    res.render('addUser');
});

app.post("/submit-user", (req,res) => {
    console.log(req.body);
    res.render('submitUser', req.body);
});

app.get("/users", (req, res) => {
    const users = ['dharti', 'swati', 'smruti','om','dev'];
    // const isLogin = true;
    res.render('usersConditions',{users: users,isLogin:true});
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});