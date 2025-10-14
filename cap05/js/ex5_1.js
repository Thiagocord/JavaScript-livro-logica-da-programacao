const frm = document.querySelector("form");
const res = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero = Number(frm.innumero.value);
    let resposta = "";

    for (let i = 1; i <= 10; i = i + 1) {
        resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`;
    }

    res.innerText = resposta


})