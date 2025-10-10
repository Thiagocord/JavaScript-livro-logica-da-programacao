const prompt = require('prompt-sync')();
const nomeVeiculo = prompt("Nome Veículo: ");
const valor = Number(prompt("Qual o preço: "));

const entrada = valor * 0.50;
const saldo = entrada / 12;

console.log(`promoção: ${nomeVeiculo}`);
console.log(`Entrada de R$: ${entrada.toFixed(2)}`);
console.log(`+12x de R$: ${saldo.toFixed(2)}`);


