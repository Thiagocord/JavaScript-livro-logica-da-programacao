const frm = document.querySelector("form");
const res = document.getElementById("resposta");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const num = Number(frm.innumero.value);

    const resposta = [];

    for (let i = num; i >= 1; i--) {
        resposta.push(i)                
    }
    

    res.innerText = `Entre ${num} e 1: ${resposta.join(", ")}.`
})
