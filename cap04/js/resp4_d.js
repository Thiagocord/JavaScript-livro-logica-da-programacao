const frm = document.querySelector("form");
const res1 = document.getElementById("resposta1");
const res2 = document.getElementById("resposta2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const triA = Number(frm.inladoa.value);
    const triB = Number(frm.inladob.value);
    const triC = Number(frm.inladoc.value);

    let nomeTriangulo
    if (triA >= triB + triC || triB >= triA + triC || triC >= triA + triB) {
        res1.innerText = `Lados não podem forma um triângulo`;
        res2.innerText = ``;
    } else {
        res1.innerText = `Lados podem forma um triângulo`;
        if (triA == triB && triA == triC) {
            nomeTriangulo = "Equilátero";
        } else if (triA == triB || triA == triC || triC == triB) {
            nomeTriangulo = "Isósceles";
        } else {
            nomeTriangulo = "Escaleno";
        }
        res2.innerText = `Esse é um triângulo ${nomeTriangulo}`
    }
})