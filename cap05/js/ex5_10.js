const frm = document.querySelector("form");
const resp1 = document.getElementById("resp1");
const resp2 = document.getElementById("resp2");
const resp3 = document.getElementById("resp3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const valor = Number(frm.inValor.value);
    const numParc = Number(frm.inParcelas.value);

    const parcelaFloor = Math.floor(valor / numParc);
    const valorFinal = parcelaFloor + (valor % numParc);

    let resposta = "";

    for (let i = 1; i < numParc; i++) {
        resposta += `${i}ª Parcela: R$: ${parcelaFloor}\n`
    };

    resposta += `${numParc}ª Parcela: R$: ${valorFinal}`

    resp1.innerText = `Valor R$: ${valor.toFixed(2)}`;
    resp2.innerText = `Nº de parcelas: ${numParc}`;
    resp3.innerText = resposta;

    console.log(parcelaFloor);
    console.log(valorFinal);


    // 1ª parcela: R$ valor





})