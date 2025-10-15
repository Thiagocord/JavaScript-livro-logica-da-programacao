const frm = document.querySelector("form");
const res = document.getElementById("resposta");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const num = Number(frm.innumero.value);

    let resposta = `Os números entre ${num} e 1 são:\n`;

    for (let i = num; i > 1; i = i - 1) {
        resposta = resposta + i + ", ";
                
    }
    resposta = resposta + "1.";

    res.innerText = resposta
})
