const questions = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Ajudei quantas pessoas hoje?",
];

const ask = (index = 0) => {
  process.stdout.write("\n\n\n" + questions[index] + " =>");
};

ask();

const respostas = [];
process.stdin.on("data", (data) => {
  respostas.push(data.toString().trim());
  if (respostas.length < questions.length) {
    ask(respostas.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  console.log(
    `Vlw Mauricio!
    
    O que você aprendeu hoje foi:
    ${respostas[0]}

    O que te aborreceu hoje foi:
    ${respostas[1]}

    O que te deixou feliz foi:
    ${respostas[2]}

    Você ajudou ${respostas[3]} hoje!
    
    
    
    
    `
  );
});
