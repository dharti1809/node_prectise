import express from 'express';
import path from 'path';
const app = express();

function checkRoute(req,res,next){ 
    console.log("user is accessing " + req.url + " page");
    next();
 }

 app.use(checkRoute); //this is middleware


//  app.use((req,res,next) => { 
//     console.log("user is accessing " + req.url + " page");
//     next();
//  }); //this is middleware in arrow function form


//age check middleware
//  function checkAge(req,res,next){
//     if(!req.query.age || req.query.age < 18) {
//         return res.send("Alert! ,You are not allowed to access this page");
//     }else{
//         next();
//     }
//  }

//  app.use(checkAge); //this is middleware for checking age

// function ipCheck(req,res,next){
//     const ip = req.socket.remoteAddress;
//     console.log("User IP: " + ip);
//     if(ip.includes('192.168.5.75')){
//         return res.send("Access denied for this IP address");
//     }else{
//         next();
//     }
// }

// app.use(ipCheck); // Use the IP check middleware

app.get("/", (req, res) => {
    res.send("Hello this is login page");
});

app.get("/users", (req,resp) => {
    resp.send("Hello this is users page");
})

app.get("/view", (req,resp) => {
    resp.send("Hello this is View page");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});