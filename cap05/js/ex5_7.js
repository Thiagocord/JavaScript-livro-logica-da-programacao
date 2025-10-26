const frm = document.querySelector("form")
const resp = document.getElementById("espacos")


frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const num = Number(frm.innumero.value);

    let estrelas = "";

    for (let i = num * 2; i >= 1; i = i - 1) {


        if (i % 2 === 0) {
            estrelas += "*";
        } else {
            if (i !== 1) {
                estrelas += "-"
            }
        }


    }
    resp.innerText = estrelas

})