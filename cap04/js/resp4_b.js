const frm = document.querySelector("form");
const res = document.getElementById("respostas");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const velocidadePermitida = Number(frm.velocidade_permitida.value);
    const velocidadeCondutor = Number(frm.velocidade_condutor.value);

    if (velocidadeCondutor <= velocidadePermitida) {
        res.innerText = `Sem multa!`
    } else if (velocidadeCondutor <= (velocidadePermitida * 0.20)  + velocidadePermitida) {
        res.innerText = `Multa leve!`
    } else {
        res.innerText = `multa Grave!`
    }
})


