const frm = document.querySelector("form");
const resp = document.getElementById("resp");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numChin = Number(frm.inNumDeChinchilas.value);
    const numAno = Number(frm.inNumAno.value);

    let resposta = "";
    let chinchi = numChin;

    for (let i = 1; i <= numAno; i++) {

        resposta += `${i}º Ano: ${chinchi} Chinchilas.\n`;
        chinchi *= 3;

    }

    resp.innerText = resposta
    // 1º Ano : 4 Chinchilas
});
