import express from 'express';
import { handleUsers } from './controller/mvcUserController.js'
const app = express();

app.set('view engine', 'ejs');

app.get('/mvcUsers', handleUsers)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
