const EventEmitter = require("events");

const emitter = new EventEmitter();

const eventCounts = {
    'login': 0,
    'logout': 0,
    'purchase-product': 0,
    'profile-update': 0
}

emitter.on('login',(userName) => {
    eventCounts['login']++;
    console.log(`${userName} You are logged in successfully`);
    
})

emitter.on('logout', (userName) => {
    eventCounts['logout']++;
    console.log(`${userName} You are logged out successfully`);
})

emitter.on('purchase-product', (userName, product) => {
    eventCounts['purchase-product']++;
    console.log(`${userName} You have purchased ${product} successfully`);
})

emitter.on('profile-update', (userName, address) => {
    eventCounts['profile-update']++
    console.log(`${userName} your Profile updated successfully with ${address}`);
})

emitter.on('summary', () => {
    // summary.forEach(eventCounts => {
       console.log(eventCounts)    
    // });
    
})

emitter.emit("login", "Dharti");
emitter.emit("logout", "Dharti");
emitter.emit("purchase-product", "dharti", "laptop");
emitter.emit("profile-update", "dharti", "address");
emitter.emit('summary');

