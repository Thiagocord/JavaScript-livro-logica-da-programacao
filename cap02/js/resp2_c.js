const frm = document.querySelector("form");
const text1 = document.getElementById("texto1");
const text2 = document.getElementById("texto2");

frm.addEventListener("submit", (e) =>{
    const produto = frm.inproduto.value;
    const preco = Number(frm.inpreco.value);

    const valorReal = (preco * 2) + (preco * 0.50);
    const promo = (preco * 3) - valorReal;

    text1.innerText = `${produto} - Promoção: Leve 3 por R$: ${valorReal.toFixed(2)}`;
    text2.innerText = `O 3° produto custa R$: ${promo.toFixed(2)}`

    e.preventDefault();
});


