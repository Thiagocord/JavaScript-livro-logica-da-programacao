const frm = document.querySelector("form");
const texto = document.querySelector("h3");

frm.addEventListener("submit" , (e) => {
    const n1 = Number(document.getElementById("numero1").value);
    const n2 = Number(document.getElementById("numero2").value);

    const media = (n1+n2);

    texto.innerHTML = `A soma dos dois número é: ${media}`;

    e.preventDefault();
})