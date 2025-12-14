// const { log } = require("console");
const fs = require("fs");

const path = require("path");
const filename = "test.txt";
const filePath = path.join(__dirname, filename);
console.log(__dirname);
// fs.writeFileSync() : writes data to a file. if file doesn't exist, 
// it will be created.if file exists it overwrites a content.
//syntex = fs.writeFileSync(filePath, data, options);
//options = optional, include encoding (UTF-8), mode or flags

// fs.writeFileSync("data.txt", "Hello World");


// const filename = "test.txt";
// const filepath = path.join(__dirname, filename)
// console.log(__dirname);

// const writeFile = fs.writeFileSync(filename, "This is initial Data", "utf-8");
// // const writeFile = fs.writeFileSync(filepath, "This is initial Data, by dharti 2", "utf-8");
// console.log(writeFile);


// -------------------------------------------------Read File--------------------------
//read the file
console.log("fvndf");
const readFile = fs.readFileSync(filePath, "utf-8");
console.log("hiii",readFile);
console.log("read");

// ----------------------------------------------------append file-----------------------
// fs.appendFileSync() : Append data to the file. if the file doesn't exitst it creates a file 
//syntex:  fs.appendFileSync(filePath, "data", "option")

// const appendFile = fs.appendFileSync(filePath, "\nThis is appended data", "utf-8");

// console.log(appendFile);

// ----------------------------------------------------delete file---------------------------

// fs.unlinkSync(); - delete file by its path
// fs.unlinkSync(filePath);

// const deleteFile = fs.unlinkSync(filePath);
// console.log(deleteFile);

// ------------------------------------------------------Rename File---------------------------

// const newFileName = "testUpdated.txt";
// const newFilePath = path.join(__dirname, newFileName);

// const renameFile = fs.renameSync(filePath, newFilePath);
// console.log(renameFile);