const frm = document.querySelector("form");
const resp = document.querySelector(".resposta");


frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const ano = Number(frm.inano.value);

    let resposta = "";

    if (ano == 1942 || ano == 1946) {
        resposta = `Não houve Copa no ano de ${ano} (Segunda Guerra Mundial)`;
    } else if (ano < 1930) {
        resposta = `Copa do mundo teve inicio em 1930`;
    } else if (ano % 4 == 2) {
        resposta = `Sim, em ${ano} aconteceu Copa do Mundo`;
    } else {
        resposta = `Não houve Copa do Mundo nesse ano!`;
    }

    resp.innerText = `${resposta}`;
    frm.inano.value = "";
    frm.inano.focus();

})


