// const express = require('express'); //vanilla js syntex

//ES (ecmyscript syntex)
import express from 'express';
import home, {contact} from './pages/home.js';

const app = express();
console.log("Hello World");
// console.log(app);

//both are same routes then first is considered example ("/home" and "/home") then first is consider
app.get("/", (req,resp) => {
    resp.send("Hello ms. dharti solanki");
});


app.get("/about", (req, resp) => {
    resp.send("This is about page");
});

app.get("/home", (req,resp) => {
    resp.send(home());
});

app.get("/contacts", (req,resp) => {
    resp.send(contact());
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})