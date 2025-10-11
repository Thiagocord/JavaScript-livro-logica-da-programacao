const prompt = require("prompt-sync")();
const valor = Number(prompt("valor da Compra R$: "))

const parcelaMinima = Math.floor(valor / 20);

let parcelas;
if (parcelaMinima == 0) {
    parcelas = 1
} else if (parcelaMinima > 6) {
    parcelas = 6
} else {
    parcelas = parcelaMinima
};

const valorPagar = valor / parcelas;

console.log(`Pode pagar em ${parcelas}X o valor de R$: ${valorPagar.toFixed(2)}`);


