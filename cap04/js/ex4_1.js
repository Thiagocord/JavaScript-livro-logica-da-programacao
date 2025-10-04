
const frm = document.getElementById("form2")
const res1 = document.getElementById("res1")
const res2 = document.getElementById("res2")

frm.addEventListener("submit", (e) => {
    const nome = frm.innome.value;
    const not1 = Number(frm.nota1.value);
    const not2 = Number(frm.nota2.value);

    const media = (not1 + not2) / 2;

    res1.innerHTML = `Média das notas ${media.toFixed(1)}`

    if (media >= 7) {
        res2.innerHTML = `Parabéns ${nome}! Você está aprovada.`
        res2.style.color = "blue"
    } else if (media >= 4) {
        res2.innerHTML = `Você ainda está em teste.`
        res2.style.color = "orange"
    } else {
        res2.innerHTML = `Você foi reprovada.`
        res2.style.color = "red"
    }

    e.preventDefault()
})