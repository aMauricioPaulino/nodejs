//Aqui no ONCE ele vai ouvir so o primeiro e desconsiderar os outros

const { EventEmitter } = require("events");

const ev = new EventEmitter();

ev.once("saySomething", (menssagem) => {
  console.log("Eu ouvi você", menssagem);
});

ev.emit("saySomething", "Maurício");
ev.emit("saySomething", "joão");
