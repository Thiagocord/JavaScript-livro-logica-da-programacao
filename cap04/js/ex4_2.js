const frm = document.querySelector("form");
const res = document.getElementById("resposta");
frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.innome.value.trim();
    const masculino = frm.inmasculino.checked;
    const altura = Number(frm.inaltura.value);
    let pesoIdeal;
    if (masculino) {
        pesoIdeal = 22 * Math.pow(altura, 2);
    } else {
        pesoIdeal = 21 * Math.pow(altura, 2);
    }
    res.innerText = `${nome} seu peso ideal é ${pesoIdeal.toFixed(3)} kg.`
});
