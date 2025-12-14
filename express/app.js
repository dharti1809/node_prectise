import express from 'express';
import dotenv from "dotenv";
import {PORT} from "./env.js";
dotenv.config();

// npm install dotenv  ---------run in terminal for setup this file
const app = express();
// app - this variable holds the express app which you can used to:
// Define routes (app.get(), app.post(), etc.)
// configure middleware (app.use())
// start the server (app.listen())

app.get('/', (req, res) => 
    res.send('<h1>Hello world</h1>'));

app.get('/about', (req, res) => {
    res.send('<h1>This is about page</h1>');
})

app.get('/contact', (req,res) => {
   res.send(`<div class="passwordDiv">
        <h3 class="mb-1 fw-bold">Welcome to Node! 👋</h3>
        <p class="mb-4">Please sign-in to your account</p>

        <form id="loginForm" class="mb-3" action="" method="POST">
            <input type="hidden" name="csrf" value="" />
            <div class="mb-3">
                <label for="email" class="form-label">Email / Mobile No </label>
                <input type="hidden" name="country_code" value="">
                <input type="text" class="form-control" id="email" name="mobile" placeholder="Enter your email or mobile" autofocus>
            </div>
            <div class="mb-3 form-password-toggle">
                <div class="d-flex justify-content-between">
                    <label class="form-label" for="password">Password</label>
                    <a href="">
                        <small>Forgot Password?</small>
                    </a>
                </div>
                <div class="input-group input-group-merge">
                    <input type="password" id="password" class="form-control" name="inputPass" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" aria-describedby="password" />
                    <span class="input-group-text cursor-pointer "><i class="ti ti-eye-off toggle_pwd"></i></span>
                </div>
            </div>

            <div class="row mb-3 passwordDiv">
                
                <div class="col-md-6 col-6">
                    <button type="button" id="submit-contact-form" class="btn btn-primary d-grid w-100">Sign In</button>
                </div>
                <div class="col-md-6 col-6">
                    <button type="button" class="loginOTP otp_btn btn btn-danger d-grid w-100">Get OTP</button>
                </div>
            </div>
        </form>
    </div>`)
 })

// const PORT = process.env.PORT || 3000; // --use this line to set port dynamically from environment variable

// set PORT=3000 && node --watch app.js  //--use in cmd for set port
//$env: PORT = 3000; node --watch app.js  // --use in powershell for set port



// power shell port remove - Remove-Item Env:\PORT

// console.log(process);
// console.log("hi");


 // "dev": "node --watch app.js"  // in package.json for auto restart server include in scripts
// const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
