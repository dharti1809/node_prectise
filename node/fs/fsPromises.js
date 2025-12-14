//no need for manual call back 
//cleaner and more intuitive asynchronous workflow using async/await

// use: reading file asynchronously in a non-blocking way
// writing and appending to a files without blocking event loop
const { error } = require("console");
const fs = require("fs");
// const fs = require("fs/promises");
//if you dont want to add promises everytime then add after fs method
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

//why, then() and .catch()?
// .then() ensure clear chaining of multiple asynchronous operations
// .catch() centralizes error handling, making it easy to debug and manage files

// const file = __dirname;

// fs.promises
//     .readdir(file)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));


// const filePath1 = __dirname;

// fs.promises.readdir(filePath1)
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));


// ------------------------------------------------writefile------------------------------------------------

// syntex - fs.promises.writeFile(path, data, options).then().catch();
// create (write a file) - fs.promises.writeFile
// create or override file with specific content
// writeFile() method write a data to a file asynchronously
// if file doesn't exist, it will be created
// if exists its content is replaced

fs.promises.writeFile(filePath, "Hello this is node promises example", "utf-8")
    .then( console.log("File written successfully"))
    .catch((err) => console.log(err));


// ---------------------------------------------------------read file--------------------------------------------------

// fs.promises.readFile(filePath, "utf-8")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// -------------------------------------------------------update file-----------------------------------------------------

//syntex - fs.promises.appendFile(path, data, option).then().catch();
//writeFile me data over ride hota hain or append me data add hota hain

// fs.promises.appendFile(filePath, "\n append new content", "utf-8")
//     .then(() => console.log("File updated successfully"))
//     .catch((err) => console.log(err));

// -------------------------------------------------delete file----------------------------------------------------------------

// fs.promises.unlink(filePath)
//     .then(() => console.log("File deleted successfully"))
//     .catch((err) => console.log("Error Deleting File:", err));