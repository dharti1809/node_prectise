const os = require("os");

console.log("plateform", os.platform());
console.log("userInfo", os.userInfo());
console.log("CPU architechture", os.arch());
console.log("free memory", os.freemem());