const frm = document.querySelector("form");
const resp = document.getElementById("resp");



frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const frutanome = frm.inFruta.value;
    const numVs = Number(frm.inNumeroVs.value);

    let resposta = "";

    for (let i = 1; i < numVs; i++) {
        resposta += (i % 5 === 0) ? `${frutanome}\n` : `${frutanome}*`;
    }

    resposta += frutanome

    resp.innerText = resposta

});