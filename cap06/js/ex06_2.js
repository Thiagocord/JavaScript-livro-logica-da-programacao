const frm = document.querySelector("form");
const resp1 = document.getElementById("resp1");
const resp2 = document.getElementById("resp2");
const resp3 = document.getElementById("resp3");

const erros = [];
const numSorteado = Math.floor(Math.random() * 100) + 1;
const chances = 6;
frm.inNumero.focus();


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.inNumero.value);

    if (num == numSorteado) {
        resp3.innerText = `Parabéns! Você acertou o número ${numSorteado}`;
        frm.btSubmit.disabled = true;
        frm.btbutton.className = "exibe";
    } else {
        if (erros.includes(num)) {
            alert(`Você já apostou o Número ${num}. Tente outro...`);
        } else {
            erros.push(num);
            const numErros = erros.length;
            const numChances = chances - numErros;
            resp1.innerText = `${numErros}  (${erros.join(", ")})`;
            resp2.innerText = numChances;
            if (numChances == 0) {
                alert(`Suas chances acabaram...`);
                frm.btSubmit.disabled = true;
                frm.btbutton.className = "exibe";
                resp3.innerText = `Game Over!! Número Sorteado: ${numSorteado}`;
            } else {
                const dica = num < numSorteado ? `maior` : `menor`;
                resp3.innerText = `Dica: Tente um número ${dica} que ${num}`;
            }
        }
    }
    frm.inNumero.value = "";
    frm.inNumero.focus();
});

frm.btbutton.addEventListener("click", () => {
    location.reload();
});
