
import express from 'express';
import userData from './users.json' assert {type:'json'}

const app = express();

app.get("/", (req,resp) => {
    
    console.log(userData);
    resp.send(userData);
});

app.get("/user/:id", (req,resp) => {
    const id = req.params.id;
    console.log(id)

    let filteredData = userData.filter((user) => user.id==id)
    resp.send(filteredData);
})

app.get("/username/:name", (req, res) => {
    const name = req.params.name;
    console.log(name)

    let FilterName = userData.filter((user) => user.name.toLowerCase() == name.toLowerCase())
    res.send(FilterName);
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})