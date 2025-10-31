const frm = document.querySelector("form");
const resp = document.getElementById("textos");


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeEtiqueta = frm.inNome.value;
    const num = Number(frm.inQuantidade.value);

    let resposta = "";

    for (let i = 1; i <= num; i++) {

        if (i % 2 == 1) {
            resposta += `${(nomeEtiqueta + " " + i).padEnd(15, " ")}`
        } else {
            resposta += `${nomeEtiqueta} ${i}\n`
        }
    }


    resp.innerText = resposta;

});