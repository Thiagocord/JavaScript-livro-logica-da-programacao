const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const num = Number(frm.innumero.value);
    
    if ((num % 2 === 0 && num !== 2) || (num === 1)) {
        resp.innerText = `${num} não é um número Primo.`
    } else {
        resp.innerText = `${num} é um número Primo.`
    }        
        

});