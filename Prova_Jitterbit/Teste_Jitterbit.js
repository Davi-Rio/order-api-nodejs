//Questão 8
function somaImpares(n) {
  let soma = 0;

  for (let i = 1; i <= n; i += 2) {
    soma += i;
  }

  return soma;
}

//Questão 9

function inverterPalavra(str) {
  return str.split('').reverse().join('');
}

//Questão 14 

try {
  let resultado = 10 / 0;
} catch (erro) {
  console.log("Ocorreu um erro:", erro);
}

//Questão 15 

if (idade < 18) {
  throw new Error("Idade mínima não permitida.");
}

