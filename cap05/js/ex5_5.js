const frm = document.querySelector("form");
const resp1 = document.getElementById("resposta1");
const resp2 = document.getElementById("resposta2");

let contas = "";
let soma = 0;
let numContas = 0;

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeConta = frm.inTexto.value;
    const numValor = Number(frm.inValor.value);

    soma += numValor;
    numContas++

    contas += `${nomeConta} - R$: ${numValor.toFixed(2)}\n`;

    resp1.innerText = `${contas}----------------------------------`;
    resp2.innerText = `${numContas} contas(s) - Total R$: ${soma}`;

    frm.inTexto.value = "";
    frm.inValor.value = "";
    frm.inTexto.focus()


});

