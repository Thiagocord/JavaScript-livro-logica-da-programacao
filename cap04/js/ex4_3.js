const bairro = prompt("Bairro de entrega: ");
let taxaEntrega;

switch (bairro) {
    case "centro":
        taxaEntrega = 5.00
        break;
    case "fragata":
    case "três vendas":
        taxaEntrega = 7.00
        break
    case "laranjal":
        taxaEntrega = 10.00
        break
    default:
        taxaEntrega = 8.00

}

alert(`taxa R$: ${taxaEntrega.toFixed(2)}`)