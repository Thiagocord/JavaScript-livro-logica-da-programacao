const frm = document.querySelector("form");
const resp1 = document.getElementById("resp1");
const resp2 = document.getElementById("resp2");


frm.addEventListener("submit" , (e)=> {
    e.preventDefault();

    const num = Number(frm.inNumero.value);
    

    for(let i = 1; i < num ; i++){
        if (num % i == 0) {
            resposta += `${i}, `
            soma += i
        }
    }


})
