const FRM = document.querySelector("form");
const resp1 = document.getElementById("resposta1");
const resp2 = document.getElementById("resposta2");

let resposta = "";
let numContas = 0;
let valTotal = 0;

FRM.addEventListener("submit", (e) => {
    e.preventDefault();

    const descricao = FRM.intexto.value;
    const valor = Number(FRM.invalor.value);

    numContas++;
    valTotal += valor;
    // resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";
    resposta = `${resposta}${descricao} - R$: ${valor.toFixed(2)}\n`;
    resp1.innerText = `${resposta}---------------------------`;
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`;


    FRM.intexto.value = "";
    FRM.invalor.value = "";
    FRM.intexto.focus();


})
