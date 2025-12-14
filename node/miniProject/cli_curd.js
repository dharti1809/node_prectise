import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const todos = []; //empty array

const showMenu = () => {
    console.log("1: Add a task");
    console.log("2: View Task");
    console.log("3: Exit");
    rl.question("Choose an Option: ", handleInput)
}

const handleInput = (option) => {
    if(option === "1"){
        rl.question("\n Enter a task: ", (task) => {
            todos.push(task);
            console.log("Task Added",task);
            showMenu();
        })
    } else if(option === "2"){
        console.log("\nYour TODOS list: ");
        todos.forEach((task, index) => {
            console.log("\n", `${index+1}. ${task}`);
        });
        showMenu();
    } else if (option === "3"){
        console.log("\ngood bye");
        rl.close();
    } else {
        console.log("\nInvalid Options, Please Try Again!!");
        showMenu();
    }
    
}

showMenu();