const frm = document.querySelector("form");
const resp = document.querySelector(".resposta");
const anoAtual = new Date().getFullYear();

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const ano = Number(frm.inano.value);

    let resposta = "";
    
    if (ano == 1942 || ano == 1946) {
        resposta = `Não houve Copa no ano de ${ano} (Devido a Segunda Guerra Mundial)`;
    } else if (ano < 1930) {
        resposta = `Copa do mundo teve inicio em 1930`;
    }else if (ano > anoAtual) {
        resposta = `Calma ai viajante do tempo ainda estamos em ${anoAtual}`
    } else if (ano % 4 == 2) {
        resposta = `Sim, em ${ano} aconteceu Copa do Mundo`;
    } else {
        resposta = `Não houve Copa do Mundo nesse ano!`;
    }

    resp.innerText = `${resposta}`;
    frm.inano.value = "";
    frm.inano.focus();

})

// const frm = document.querySelector("form");
// const resp = document.querySelector(".resposta");
// const anoAtual = new Date().getFullYear();

// const acoes = {
//   guerra: (ano) => `Não houve Copa no ano de ${ano} (Devido à Segunda Guerra Mundial)`,
//   antes1930: (ano) => "A Copa do Mundo teve início em 1930.",
//   futuro: (ano) => `Calma aí, viajante do tempo! Ainda estamos em ${anoAtual}.`,
//   copa: (ano) => `Sim, em ${ano} aconteceu a Copa do Mundo.`,
//   semCopa: (ano) => "Não houve Copa do Mundo nesse ano."
// };

// frm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const ano = Number(frm.inano.value.trim());
//   let tipo;

//   if ([1942, 1946].includes(ano)) tipo = "guerra";
//   else if (ano < 1930) tipo = "antes1930";
//   else if (ano > anoAtual) tipo = "futuro";
//   else if (ano % 4 === 2) tipo = "copa";
//   else tipo = "semCopa";

//   resp.textContent = acoes[tipo](ano);
//   frm.reset();
//   frm.inano.focus();
// });
