import express from 'express';
import { PORT } from './env.js';
import path from 'path';

const app = express();

// route perameters - dynamic url
app.get('/profile/:username', (req, res) => {
    console.log(req.params);

    res.send(`<h1>Hello, My username is ${req.params.username} </h1>`);
    // res.send("hii");
})

app.get('/profile/:username/article/:slug', (req, res) => {
    const formatSlug = req.params.slug.replace(/-/g, ' ');
    res.send(`<h1>Hello, My username is ${req.params.username} And my article slug is ${formatSlug}</h1>`);
})

// query parameters - dynamic url
app.get('/products', (req, res) => {
    console.log(req.query);
    // res.send(`<h1> Products page : user search for product ${req.query.search} mobile </h1>`);
    res.send(`<h1> Products page : user search for product ${req.query.page} AND Limit of stock is ${req.query.limit} mobile </h1>`);
    // res.send(`<h1> Products page </h1>`);

})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
})