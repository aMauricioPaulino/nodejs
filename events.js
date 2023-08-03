//Aqui no ON ele vai chamar todos os eventos.

const { EventEmitter } = require("events");

const ev = new EventEmitter();

ev.on("saySomething", (menssagem) => {
  console.log("Eu ouvi você", menssagem);
});

ev.emit("saySomething", "Maurício");
ev.emit("saySomething", "João");
