import express from 'express';
const app = express();


function checkAgeRouteMiddleware(req,res,next){
    console.log(req.query.age);
    if(!req.query.age || req.query.age < 18) {
        return res.send("You are not allowed to access this page");
    }else{
        next();
    }   
}

// app.use(checkAgeRouteMiddleware); //not use because we want to use this middleware only for users route not for all routes

function checkURLRouteMiddleware(req,res,next){
    console.log("User is accessing " + req.url + " page");
    next();
}


app.get("/", (req, res) => {
    res.send("<h1>Hello this is Home page</h1>");
});

app.get("/login", checkURLRouteMiddleware, (req, res) => {
    res.send("<h1>Hello this is Login page</h1>");
});

app.get("/users",checkAgeRouteMiddleware,checkURLRouteMiddleware, (req,res) => {
    res.send("<h2>Hello this is users page</h2>");
})

app.get("/view", (req,res) => {
    res.send("Hello this is View page");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});