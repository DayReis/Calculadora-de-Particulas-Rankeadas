const nivelHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
let saldoRankeadas = calcularVitorias(83, 28);

function calcularVitorias(vitorias, derrotas) {
    let resultado = vitorias - derrotas;
    return resultado;
}

if (saldoRankeadas <= 10) {
    console.log("O Herói tem o saldo de " + saldoRankeadas + " vitórias e está no nível " + nivelHeroi[0]);
} else if (saldoRankeadas === 11 || saldoRankeadas <= 20 ) {
    console.log("O Herói tem o saldo de " + saldoRankeadas + " vitórias e está no nível " + nivelHeroi[1]);
} else if (saldoRankeadas === 21 || saldoRankeadas <= 50 ) {
    console.log("O Herói tem o saldo de " + saldoRankeadas + " vitórias e está no nível " + nivelHeroi[2]);
} else if (saldoRankeadas === 51 || saldoRankeadas <= 80 ) {
    console.log("O Herói tem o saldo de " + saldoRankeadas + " vitórias e está no nível " + nivelHeroi[3]);
} else if (saldoRankeadas === 81 || saldoRankeadas <= 90 ) {
    console.log("O Herói tem o saldo de " + saldoRankeadas + " vitórias e está no nível " + nivelHeroi[4]);
} else if (saldoRankeadas === 91 || saldoRankeadas <= 100 ) {
    console.log("O Herói tem o saldo de " + saldoRankeadas + " vitórias e está no nível " + nivelHeroi[5]);
} else {
    console.log("O Herói tem o saldo de " + saldoRankeadas + " vitórias e está no nível " + nivelHeroi[6]);
}