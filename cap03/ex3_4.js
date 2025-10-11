const prompt = require("prompt-sync")();

const pesoKg = Number(prompt("Peso da ração (kg): "));
const diarioConsumo = Number(prompt("Consumo diário (gr): "));

const pesoGr = pesoKg * 1000;
const duracao = Math.floor(pesoGr / diarioConsumo);
const sobra = pesoGr % diarioConsumo;
console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra}gr`);




