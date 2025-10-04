const texto = document.querySelector("h1");

let v1 = 5;
let v2 = 6;

if (v1 < 6 && (v2 > 9 || v1 < 6)) {
    texto.innerText = "verdade"
} else {
    texto.innerText = "falso"
}


