const frm = document.querySelector("form");
const res = document.getElementById("resposta");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const horaBrasil = Number(frm.inhora.value);
    let horaFranca = horaBrasil + 5;

    if (horaFranca > 24) {
        horaFranca = horaFranca - 24
    };
    
    res.innerText = `Hora na França: ${horaFranca.toFixed(2)}`    

})










