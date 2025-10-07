const frm = document.querySelector("form")
const res = document.getElementById("resposta")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.innome.value.trim();
    const masculino = frm.inmasculino.checked;
    const altura = Number(frm.inaltura.value);


    if (masculino) {
        pesoIdeal = 22 * (altura * altura);
    } else {
        pesoIdeal = 21 * (altura * altura);
    }

    res.innerText = `${nome} seu peso ideal é ${pesoIdeal.toFixed(2)} kg.`
        
})