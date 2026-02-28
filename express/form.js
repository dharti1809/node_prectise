import express from 'express';
import { PORT } from './env.js';
import path from 'path';
import { fileURLToPath } from "url";


const app = express();

// const filename = path.join(import.meta.url);
const filename =  fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
console.log(dirname);
const staticPath = path.join(dirname, 'forms');
console.log(staticPath);
app.use(express.static(staticPath)); //this is middleware for css or js file

app.get("/", (req, res) => {
    // res.sendFile(path.join(staticPath, "form.html"));
    // res.send(staticPath);
    const formPath = path.join(staticPath, 'form.html');
    res.sendFile(formPath); 
});

app.get('/contact', (req, res) => {
    console.log(req.query);
    // res.redirect('/');
    res.send("OK");
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
