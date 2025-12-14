console.log("hii");

if (typeof window !== "undefined") {
  console.log("Running in browser");
} else if (typeof global !== "undefined") {
  console.log("Running in Node.js");
}

// console.log(module)
// const add = require("./math");

// const {add, subs, multi, div} = require("./math");
// console.log(add(2, 3));
// console.log(subs(5, 2));
// console.log(multi(3, 4));
// console.log(div(8, 2));

const math = require("./math");

console.log(math.add(2, 3));
console.log(math.subs(5, 2));
console.log(math.multi(3, 4));
console.log(math.div(8, 2));
