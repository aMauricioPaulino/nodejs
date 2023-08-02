// ClearTimeout cancela um Timeout
const timeOut = 3000;
const final = () => console.log("Até mais!");

let tempo = setTimeout(final, timeOut);

clearTimeout(tempo);
