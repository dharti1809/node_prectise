import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();


//in never version of node (14.8+),  you can use top-level await without needing wrap it in an async function
// const app = async () => { //no use
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // const data = await response.json();
    // console.log(data);
// };

app.use(express.static('public')); //this is middleware for css or js file

app.get('/test', (req,res) => {
    // console.log(__dirname);
    // console.log(__filename);
  
    // console.log(import.meta.url);
    // console.log(import.meta.filename);

    const __filename = new URL(import.meta.url).pathname;
    console.log(__filename);

    const __dirname = path.dirname(__filename);
    
    // res.send(`<div class="text-section">
    //     <h1>Never Lose Your Hope</h1>
    //     <p>You are Beautiful the way you are. Keep Doing the Good Work.</p>
    //     <a href="#">God Bless You</a>
    // </div>`);

    // res.send("hello world");

    const homePagePath = path.join(__dirname, 'public', 'index.html')
    res.sendFile(homePagePath);
})

// const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

})