const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on("messageRecu", function(eventArguments) {

    console.log(eventArguments);
});

emitter.emit("messageRecu", "ceci est une tring");
emitter.emit("messageRecu", {id: 1, message: "Hey ca va"});