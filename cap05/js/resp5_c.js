const frm = document.querySelector("form");
const resp1 = document.getElementById("resp1");
const resp2 = document.getElementById("resp2");


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.inNumero.value);

    let resposta = [];
    let soma = 0;

    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            resposta.push(i);
            soma += i
        }
    }

    const perfeitoSN = (soma === num) ? `${num} é perfeito` : `${num} não é perfeito`;

    resp1.innerText = `Divisores do ${num}: ${resposta.join(", ")} (soma: ${soma})\n${perfeitoSN}`;





})

let n = 7

const numero = [1, 2, 3]

numero[n] = "a"

console.log(numero)
