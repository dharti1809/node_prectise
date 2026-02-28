
import express from 'express';

const app = express();

app.get("/", (req,resp) => {
    const users = ['henil','roy','abhishek','shahrukh','pavan']

    let data = `<ul>`;
    for(let i=0; i< users.length; i++){
        // data+=`<li> ${users[i]} </li>`;
        data += `<li><a href="user/${users[i]}">${users[i]}</a></li>`
        console.log(users[i]);
    }
    data += `</ul>`;
    resp.send(data);
});


app.get('/user/:name', (req,res) => {
    console.log(req.params.name);
    const userName = req.params.name;
    res.send(`this is ${userName} profile page` )
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})