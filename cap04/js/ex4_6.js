const frm = document.querySelector("form");
const res1 = document.getElementById("texto1");
const res2 = document.getElementById("texto2");
const res3 = document.getElementById("texto3");

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.invalor.value);
    e.preventDefault()

    if (valor % 10 != 0) {
        alert("Valor inválido para notas disponiveis (R$: 10, 50, 100) ")
        frm.invalor.focus()
        return
    }

    const notasCem = Math.floor(valor / 100);
    let resto = valor % 100;
    const notasCiquenta = Math.floor(resto / 50);
    resto = resto % 50;
    const notasDez = Math.floor(resto / 10);

    if (notasCem > 0) {
        res1.innerText = `Notas de 100 R$: ${notasCem}`
    } else {
        res1.innerText = " "
    }

    if (notasCiquenta > 0) {
        res2.innerText = `Notas de 50 R$: ${notasCiquenta}`
    } else {
        res2.innerText = ""
    }

    if (notasDez > 0 ){
        res3.innerText = `Notas de 10 R$: ${notasDez}`
    } else {
        res3.innerText = ""
    }
    
    

})