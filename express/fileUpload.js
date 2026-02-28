import express from "express";
import multer from "multer";

const app = express();

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "img")
    },

    filename: function(req,file, cb) {
        cb(null, file.originalname);
    }
    
})

const upload = multer({storage})

app.get("/", (req, res) => {    

    res.send(
        `<form action="/upload" method="post" enctype="multipart/form-data">
        <label>Upload File: </label>
            <input type="file" name="myfile"><br><br>
            <button>Upload File</button>
        </form>`
    )
});

app.post("/upload", upload.single("myfile") , (req, res) => {
    console.log(req.body);
    res.send({
        message: "File Uploaded Successfully",
        info: req.file
    })
})

app.listen(3000);