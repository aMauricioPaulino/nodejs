// SetTimeout roda uma função depois de x milissegundos
const timeOut = 3000;
const final = () => console.log("Até mais!");

setTimeout(final, timeOut);
console.log("Vou rodar primeiro, por conta do assincronismo");
