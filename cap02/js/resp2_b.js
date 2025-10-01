
const frm = document.querySelector("form")
const texto = document.getElementById("texto")

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.invalor.value);
    const tempo = Number(frm.intempo.value);

    const pagar = Math.ceil(tempo / 15) * valor;

    texto.innerText = `Valor a Pagars R$: ${pagar.toFixed(2)}`

    e.preventDefault()
})