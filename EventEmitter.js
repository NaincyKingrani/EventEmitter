var EventEmitter = require("events");
var events = new EventEmitter();

// without Parameter
events.on("CustomEvent" ,() =>{
    console.log("This is my custom event  1 ");
})

events.on("CustomEvent" ,() =>{
    console.log("This is my custom event  2 ");
})
events.on("CustomEvent" ,() =>{
    console.log("This is my custom event  3 ");
})

events.emit("CustomEvent");




// with Parameter

events.on("ParametrEvents" , (sc , msg) =>{
    console.log(`1st Argumnet is  ${sc}  
    and Argumets is ${msg}`)
});

events.emit("ParametrEvents" , 200,"ok Teedy Beer");


