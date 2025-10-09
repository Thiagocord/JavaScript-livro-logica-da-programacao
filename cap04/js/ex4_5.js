const frm = document.querySelector("form");
const res = document.getElementById("texto");


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nu1 = Number(frm.innumero.value)


    const raiz = Math.sqrt(nu1)


    if (raiz % 1 == 0) {
        res.innerText = `A raiz é ${raiz}`
    } else {
        res.innerText = `Não a raiz exata para o número ${nu1}`
    }

    // if (Number.isInteger(raiz)) {
    //     res.innerText = `A raiz é ${raiz}`
    // } else {
    //     res.innerText = `Não a raiz exata para o número ${nu1}`
    // }




})