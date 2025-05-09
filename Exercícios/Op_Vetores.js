function sum(vetor) {
    return vetor.reduce((total, num) => total + num, 0);
}

/** ? é um operador ternário funciona como um if ou else em casos simples de tomada de decisão
 * ANOTAÇÃO PARA GRAVAR NA MENTE!!!
 */
function sumOdds(vetor) {
    return vetor.reduce((total, num) => num % 2 !== 0 ? total + num : total, 0);
}

function product(vetor) {
    return vetor.reduce((total, num) => total * num, 1);
}
/**Se quiser testar com outros valores é só substituir aqui!!! */
const notas = [1, 2, 3, 4, 5, 6];

console.log("Notas:", notas);
console.log("Soma total:", sum(notas));
console.log("Soma dos ímpares:", sumOdds(notas));
console.log("Produtório:", product(notas));