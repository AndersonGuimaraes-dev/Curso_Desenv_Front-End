let c = 89;
let b = 07;

/*
Trocar valores: c = 07 e b = 89
c = 07;
b = 89;
console.log("c = "+c);
console.log("b = "+b);
*/

// Criando uma variável "temporária"
let temp = c;
c = b;
b = temp;
console.log(c);
console.log(b);
// Poderá ser usado array