//import EventEmitter class

const EventEmitter = require('events');

//create enstance of EventEmitter class
const emitter = new EventEmitter();

// // 1) Define Event Listener (addListener)
// emitter.on("greet", () => {
//     console.log("Hello, welcome to Node js");
// })
// // 2) Trigger (emit) the event
// emitter.emit("greet");


// you can also pass an argument

// emitter.on("greet", (userName, profession) => {
//     console.log(`Hello, ${userName}  welcome to Node js ${profession} ` + profession);
// })

// emitter.emit("greet", "Dharti,", "You are Full stack Developer");


//but its best idea to take a single argument as object

emitter.on("greet", (arg) => {
    console.log(`Hello, ${arg.userName} welcome to Node js ${arg.profession}`);
})

emitter.emit("greet", { userName: 'Dharti', profession: 'you are php developer' })