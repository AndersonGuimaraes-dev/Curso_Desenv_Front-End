/*
Elabore uma função que receba um array de números e retorne um array com todos os números pares e que também tenha índices pares.
*/
let numero = [12,23,33,34,45,46,58,59,61,62,63,64];
numero.forEach((numero, i) => {
    if(i % 2 == 0 && numero % 2 == 0){
        console.log('Número '+numero+' Índice '+i)
    }
})