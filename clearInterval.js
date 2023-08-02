// ClearInterval cancerar um SetInterval registrado.

const timeOut = 1000;
const checking = () => console.log("Feito!!!");

let intervalo = setInterval(checking, timeOut);

clearInterval(intervalo);
