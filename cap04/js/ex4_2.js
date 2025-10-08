const frm = document.querySelector("form");
const res = document.getElementById("resposta");
frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.innome.value.trim();
    const masculino = frm.inmasculino.checked;
    const altura = Number(frm.inaltura.value);    
    
    const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2);

    // let pesoIdeal;
    // if (masculino) {
    //     pesoIdeal = 22 * Math.pow(altura, 2);
    // } else {
    //     pesoIdeal = 21 * Math.pow(altura, 2);
    // }

    res.innerText = `${nome} seu peso ideal é ${peso.toFixed(3)} kg.`
});

frm.addEventListener("reset", () => {
    res.innerText = "";
})
