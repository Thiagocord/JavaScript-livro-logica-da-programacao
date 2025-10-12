const frm = document.querySelector("form");
const res1 = document.getElementById("resposta1");
const res2 = document.getElementById("resposta2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const valor = Number(frm.invalor.value);

    let troco;
    if (valor < 1.00) {
        res2.innerText = `Valor insuficiente`;
    } else if (valor < 1.75) {
        troco = Math.abs(valor - 1);
        res1.innerText = `Tempo: 30 min`;
        res2.innerText = `Troco R$: ${troco.toFixed(2)}`;
    }else if (valor < 3.00) {
        troco = Math.abs(valor - 1.75);
        res1.innerText = `Tempo: 60 min`;
        res2.innerText = `Troco R$: ${troco.toFixed(2)}`;
    }else {
        troco = Math.abs(valor - 3.00)
        res1.innerText = `Tempo: 120 min`;
        res2.innerText = `Troco R$: ${troco.toFixed(2)}`;
    }

})
