import express from 'express';
import { PORT } from './env.js';
import path from 'path';
import { fileURLToPath } from "url";

const app = express();

// const __filename = new URL(import.meta.url).pathname;
// console.log(__filename);
const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);
console.log(__dirname);

const staticPath = path.join(__dirname, "public");

app.use(express.static(staticPath)); //this is middleware for css or js file
app.use(express.urlencoded({ extended: true }));

app.get("/form", (req, res) => {
    res.sendFile(path.join(staticPath, "form.html"));
});

// app.get("/contact", (req, res) => {
//     console.log("METHOD:", req.query);
//     console.log("BODY:", req.query  );
//     // res.send("OK");
//     res.redirect('/form');
// });

app.post("/contact", (req, res) => {
    console.log("METHOD:", req.method);
    console.log("BODY:", req.body);
    // console.log(req.body);
    res.send("form submitted successfully");
    // res.redirect('/form');
});

// Default route for handling 404 errors
// app.use((req, res) => {
//     return res.status(404).send("<h1>404 Page Not Found</h1>");
// })
// console.log(staticPath);


app.use((req, res) => {
    
    return res.status(404).sendFile(path.join(__dirname, "views/404.html"));
})

// app.use((req, res) => {
//   return res.status(404).sendFile(
//     path.join(__dirname, "views", "404.html")
//   );
// });

//api
// app.get('/healthcheck' , (req,res) => {
//     res.status(200).json({
//         'message' : 'Healthcheck succesful'
//     });
// })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});