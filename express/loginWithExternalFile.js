// loginWithExternalFile.js
import express from 'express';
import { loginHeader } from './pages/home.js';
import { dataSubmitted } from './pages/submitForm.js';  
import loginForm from './pages/loginForm.js';

const app = express();

app.get("/", (req, resp) => {
    resp.send(loginHeader());
});

app.get("/login", (req, resp) => {
    resp.send(loginForm());
});

app.post("/submit", (req, resp) => {
    resp.send(dataSubmitted());
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});