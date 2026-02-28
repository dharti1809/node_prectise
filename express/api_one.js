import express from 'express';
import { MongoClient , ObjectId } from 'mongodb';
import { success } from 'zod';


const dbName = "school";
const url = "mongodb://localhost:27017"
const client = new MongoClient(url)
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.set('view engine', 'ejs')
client.connect().then((dbconnection) => {
    const db = dbconnection.db(dbName)

    //get Data API 
    app.get("/get_api", async(req,res)=>{
        const collection = db.collection("students");
        const students = await collection.find().toArray();
        res.send(students)
    })

    // Get Data UI
    app.get("/ui", async(req,res)=>{
        const collection = db.collection("students");
        const result = await collection.find().toArray();
        res.render('students', {result})
    })

    // app.get("/add_user", (req,res) => {
    //     res.send(`<form method="post" action="add-student">

    //     <label>Student Name</label>
    //     <input type="text" name="name" placeholder="Enter Your Student Name"><br><br>

    //      <label>Student Email</label>
    //     <input type="text" name="email" placeholder="Enter Your Student Email"><br><br>

    //      <label>Student Age</label>
    //     <input type="text" name="age" placeholder="Enter Your Student age"><br><br> 

    //     <button>Submit</button>

    // </form>`)

    // })

    // Add Student Data UI
    app.get("/add_user", (req,res) => {
        res.render('addStudentForm');
        // addStudentForm.ejs
    })
    
    app.post("/add-student", async (req,res)=>{
        console.log(req.body)
        const collection = db.collection("students");
        // const student = await collection().find().toArray();

        const result = await collection.insertOne(req.body)
        console.log(result)
        res.send("Data saved")
    })

    // Add Data API
    app.post("/add-student-api", async(req,res)=> {
        // console.log(req.body)

        const {name, email, age} = req.body
        if(!name || !email || !age){
            res.send({message: "Operation Failed", success: false})
            return false
        }
 
        const collection = db.collection("students");
        const result = await collection.insertOne(req.body)
        res.send({message: "Data Stored Successfully", success: true, result:result })
    });

    // delete For UI
    app.get("/ui/delete/:id", async (req,res) => {
        // console.log(req.params.id);
        const collection = db.collection("students");
        const result = await collection.deleteOne({_id: new ObjectId(req.params.id)})

        if(result){
            res.send("<h1>Student Record Deleted</h1>")
        }else{
             res.send("<h1>Student Record Not Deleted</h1>")
        }
       
    })

    // delete For Api
    app.delete("/delete/:id", async (req,res) => {
        // console.log(req.params.id);
        const collection = db.collection("students");
        const result = await collection.deleteOne({_id: new ObjectId(req.params.id)})

        if(result){
            res.send({
                message: "Delete Student  Successfully",
                success: true
            })
        }else{
            res.send({
                message: "Something went wrong",
                success: false
            })
        }
       

    })

    //get 1 Student UI
    app.get("/ui/student/:id", async(req,res) => {
        // console.log(req.params.id)
        const id = req.params.id;

        console.log(id);
        const collection =  db.collection("students");
        const result = await collection.findOne({_id: new ObjectId(req.params.id)})
        res.render('updateStudentForm', {result});
    })

    //get 1 student API
     app.get("/student/:id", async(req,res) => {
         const id = req.params.id;

        console.log(id);
        const collection =  db.collection("students");
        const result = await collection.findOne({_id: new ObjectId(req.params.id)})

        res.send({
            message: "Data Get Successfully",
            success: true,
            result: result
        })
    })

    //update student UI
    app.post("/ui/update/:id", async(req,res) => {
        console.log(req.body);
        console.log(req.params.id);

        const collection = db.collection("students");
        const filter = {_id : new ObjectId(req.params.id)}
        const update = {$set: req.body}

        const result = collection.updateOne(filter,update)

        if(result){
            res.send("Data Updated successfully")
        }else{
            res.send("Data Not Updated.")
        }
    })

    //update student API

    app.put("/update/:id", async(req,res) => {
        console.log(req.body);
        console.log(req.params.id);
        const collection = db.collection("students");
        const filter = {_id : new ObjectId(req.params.id)}
        const update = {$set: req.body}

        const result = collection.updateOne(filter, update);

        if(result) {
            res.send({
                message: "Data Update Successfully",
                success: true,
                result: req.body
            })
        }else{
             res.send({
                message: "Data not Updated",
                success: false,
                result: null
            })
        }

    })

})


app.listen(3000)