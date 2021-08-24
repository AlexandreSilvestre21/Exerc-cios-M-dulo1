const frase = "       Projeto 01 - Projeto Detetive - @Blue\n";
console.log(frase.toUpperCase());

console.log("Este é um questionário sobre a verificação de um CRIME !\n");

console.log("  Responda somente SIM ou NÃO para as perguntas abaixo:\n");

const perguntas = 
[
"01 - Telefonou para a vítima?",
"02 - Esteve no local do crime?",
"03 - Mora perto da vítima?",
"04 - Devia para a vítima?",
"05 - Já trabalhou com a vítima?"];

let valor = 0;

let resultado = "INOCENTE - Obrigado, já pode ir";

for (r = 0; r < perguntas.length; r++ ){
  valor += var1(perguntas[r]);
}

if (valor === 5 ){
  resultado = "ASSASSINO - Mãos ao alto! Você está preso!";
} 
  else if (valor > 2 ){
  resultado = "CÚMPLICE - Fique atento.. Nós iremos lhe procurar!";
} 

  else if (valor === 2 ){ 
  resultado = "SUSPEITO - Não saia da cidade !"; 
} 

console.log("\nVocê é considerado: ${resultado}.");

function var1(perg){
  let resposta = prompt(perg).toUpperCase();

  if (resposta === "SIM"){
    return 1;
  } 
    else if (resposta === "NÃO"){
    return 0;
  } 
    
    else {
    console.log("Responda somente SIM ou NÃO. Vamos tentar de novo !\n");
    return var1(perg);
  }
}
 