/*
Desenvolva um script em javascript que tenha uma função e essa função deve receber dois parâmetros. No primeiro parâmetro será informado o elemento que repetira, enquanto que o segundo informa o número de vezes que vai ocorrer a repetição. A função deve retornar um array com os itens informados.
*/
function repeticao(numero, qt){ // função com o número e a quantidade de vezes que repete
    let resultado = [] // cria o array

    for(let i = 0; i < qt; i++)
    resultado.push(numero) //inclui o valor "numero" no array por meio do .push
    return resultado //retorna o valor do resultado
}
console.log(repeticao(2,3)) // mostra na tela, com os parâmetros de número e a quantidade de vezes que ele repete