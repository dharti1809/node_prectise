const fs = require("fs/promises");

const path = require("path");

const fileName = "asyncFile.txt";
// const fileNameNew = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);



// fs.promises
//     .readdir(filePath)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));


// const readFolder = async () => {
//     try {
//         const dataAsync = await fs.promises.readFile(filePath, "utf-8");
//         console.log(dataAsync);
//     } catch (error) {
//         console.log(error);
//     }
// }

// readFolder();


// ------------------------------------write file------------------------------
// syntex- fs.promises.writeFile(path, DataTransfer, option)
// write data to a file asynchronously. if file is exists, it overwrite the content

const writeFileExample = async () => {
    try{
        await fs.writeFile(filePath, "This is async await example", "utf-8");
        console.log("File is added successfully");
    }catch(error){
        console.log(error);
    }
}

writeFileExample()

// ------------------------------------------read file---------------------------------

// const readFolder = async () => {
//     try {
//         const dataAsync = await fs.readFile(filePath, "utf-8");
//         console.log(dataAsync);
//     } catch (error) {
//         console.log(error);
//     }
// }

// readFolder();

// -------------------------------------------update file----------------------------------

// syntex- fs.promises.appendFile(path, DataTransfer, option)
// const append = async () => {
//     try{
//         await fs.appendFile(filePath, "\n This is updated data using async await", "utf-8");
//         console.log("File is updated successfully");
//     }catch{
//         console.error(error);
//     }
// }

// append();


// ---------------------------------------delete file--------------------------------------

// const deleteFile = async () => {
//     try{
//         await fs.unlink(filePath);
//         console.log("File is deleted successfully");
//     }catch(error){
//         console.error("delete file",error.message);
//     }
// }

// deleteFile();