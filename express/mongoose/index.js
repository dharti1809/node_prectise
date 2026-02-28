import mongoose from 'mongoose';
import express from 'express';
import studentModel from '../model_mongoose/studentModel.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))

await mongoose.connect("mongodb://localhost:27017/school").then(() => {
    console.log("Database connected")
})



app.get('/getData',async(req, res) => {

    const studentData = await studentModel.find();
    res.send(studentData)
});

app.post('/addData', async(req, res) => {

     console.log(req.body);  
     if(!req.body || !req.body.name || !req.body.email || !req.body.age){
         res.send({
            message: "All fields are required",
            success: false,
            storeInfo : null
        })
        return false;
     }

     const studentData = await studentModel.create(req.body);

   res.send({
    message: "Data added successfully",
    success: true,
    storeInfo : studentData
   });
})

app.put("/updateData/:id", async(req, res) => {

  
    const id = req.params.id;
    console.log(req.body, id);

    const studentData = await studentModel.findByIdAndUpdate(id, {...req.body})

    res.send({
        message: "Data Updated successfully",
        success: true,
        storeInfo:studentData
    });

});


app.delete("/deleteData/:id", async(req, res) => {
    const id = req.params.id;

    const studentData = await studentModel.findByIdAndDelete(id);

     res.send({
        message: "Data Deleted successfully",
        success: true,
        storeInfo: studentData
    });
});

// --------------------basic connection ----------------------
// async function dbConnection(){
//     await mongoose.connect("mongodb://localhost:27017/school")

//     const Schema = mongoose.Schema({
//         name: String,
//         email:String, 
//         age: Number
//     })

//     const studentsModel = mongoose.model('students', Schema);
//     const result = await studentsModel.find();
//     console.log(result)
// }

// dbConnection();



app.listen(3000)