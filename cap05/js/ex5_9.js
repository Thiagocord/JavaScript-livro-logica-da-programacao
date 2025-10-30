const frm = document.querySelector("form");
const resp = document.getElementById("textos");


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeEtiqueta = frm.inNome.value;
    const num = Number(frm.inQuantidade.value);

    let resposta = "";

    for (let i = 1; i <= num; i++) {

        resposta += nomeEtiqueta + "    ";

        if (i % 4 === 0) {
            resposta += "\n";
        }

    }

    resp.innerText = resposta;

});