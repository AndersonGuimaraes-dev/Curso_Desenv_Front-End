// Constantes
const numero1 = 6;

/*
numero1 = 8; - se compilar, vai apresentar erro, já que a constante não pode ser alterada
*/
let numero2 = 4;
numero2 = numero2 + 8; // por ser variavel, poderá ser alterado

const pi = 3.14159265358979323846;

// Exemplo: cálculo da área do círculo

let area;//poderá ser declarado como constante, já que a fórmula da área não será alterada
let raio = 6;
area = pi *  (raio * raio);
console.log(area);
// Funções que já existem no JS, por exemplo, o quadrado de um número, a raiz quadrada de um número etc.
area = pi * (Math.pow(raio,2));//math.pow para criar expoentes elevar ao quadrado, ao cubo etc.
console.log(area);
