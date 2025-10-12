const frm = document.querySelector("form");
const res = document.getElementById("resposta");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const num = Number(frm.innumero.value);
    // if (num % 2 === 0) {
    //     res.innerText = `${num} é Par!`
    // } else {
    //     res.innerText = `${num} é Ímpar!`
    // }

    const resultado = num % 2 === 0 ? "Par!" : "Ímpar!";
    res.innerText = `O Número ${num} é ${resultado}`
})