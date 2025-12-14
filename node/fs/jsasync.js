const fs = require("fs");
const path = require("path");

const filename = "jsAsync.txt";
const filePath = path.join(__dirname, filename);

// ------------------------------------add data------------------------------------
// fs.writeFile(): write data to a filePath, replacing a file if its already exists
//syntex:  fs.writeFile(path, data, options, callback)
//callback: A function with an arr parameter.

fs.writeFile(filePath, "This is file for Asyync Data", "utf-8", (err) => {
    if(err) console.log(err);
    else console.log("File is created");
})

// -----------------------------------------read data------------------------------------

// fs.readFile() : read the content of Asynchronously file and return the data as a buffer or string
// syntex: fs.readFile(path, Option, callback)
// callback: a function with parameters (error, data)

// fs.readFile(filePath, "utf-8", (err,data) => {
//     if(err) console.log(err);
// use any one toString or direct data
//     else console.log(data);  
//    
// })

// fs.readFile(filePath, (err,data) => {
//     if(err) console.log(err);
//     else console.log(data.toString());
// })


// ------------------------------------------------append file-------------------------------
// fs.appendFile() - Append data to file.  if file is doesnt exists, it is created
// fs.appendFile(path, data, options, callback)

// fs.appendFile(filePath, "\nThis is Updated data", "utf-8", (err) => {
//     if (err) console.log(err);
//     else console.log("File is updated");
//  })

// ------------------------------------------------delete file-----------------------------------

// fs.unlink() - deletes a file asynchronously
// fs.unlink(path, callback)

// fs.unlink(filePath, (err) => {
//     if (err) console.log(err);
//     else console.log("File is deleted");
// })