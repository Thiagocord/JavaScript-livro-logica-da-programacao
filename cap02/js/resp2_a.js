
const frm = document.querySelector("form");
const texto1 = document.getElementById("text1");
const texto2 = document.getElementById("text2");


frm.addEventListener("submit", (e) => {
    let remedio = frm.medic.value;
    let valor = Number(frm.preco.value);
    let promo = Math.floor(valor * 2);
    texto1.innerText = `Promoção de ${remedio}`;
    texto2.innerText = `Leve 2 por apenas R$: ${promo.toFixed(2)}`;

    e.preventDefault();
    
})