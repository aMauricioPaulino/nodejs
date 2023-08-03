const { EventEmitter } = require("events");

const ev = new EventEmitter();

ev.on("saySomething", () => {
  console.log("Eu ouvi você!!!");
});

ev.emit("saySomething");
ev.emit("saySomething");
