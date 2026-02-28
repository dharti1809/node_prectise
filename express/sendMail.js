import express from "express";
import nodemailer from "nodemailer";
import { fr } from "zod/v4/locales";

const app = express();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: '201260116510setiit@gmail.com',
    pass: 'rmrt kkeg sixg zype'
  } 
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// app.use(express.json());

app.get("/mail", (req, res) => {
    res.render("mail");
})

app.post("/submit-email", (req, res) => {
    // console.log(req.body);

    const mailOptions = {
        from: '201260116510setiit@gmail.com',
        to: 'dhartis1807@gmail.com',
        subject: req.body.subject,
        text: req.body.mail
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send("Error sending email");
        } else {
            console.log("Email sent: " + info.response);
            res.send("Email sent successfully");
        }
    });
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});