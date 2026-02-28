import express from 'express';
import path from 'path';

const app = express();

const abspath = path.resolve("views/404.html");

app.get("/abc", (req, res) => {
    res.send("<h1>Hello this is Home page</h1>");
});

app.get("/users", (req,res) => {
    res.send1("<h2>Hello this is users page</h2>");
});

app.get("/error", (req,res,next) => {
    res.send("Hello this is error page");
    // const error = new Error('');
    // error.status = 404;
    // // res.sendFile(abspath);
    // next(error);
});

function errorHandlingMiddleware(error, req, res, next) {
   
    res.status(error.status || 500).send("try After some time");
}

app.use(errorHandlingMiddleware);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});