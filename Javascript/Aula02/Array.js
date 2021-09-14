// Array é um conjunto de dados unilaterais (enfileirado) onde podem ser alocadas informações e cada informação é alocada em um índice

const exemploArray = [20, 45, 32, 67] //criado uma constante, no conjunto de dados, cada posição é um índice a partir do índice 0 (zero)

console.log(exemploArray[1], exemploArray[3])// exibir na tela o valor do array de índice 1 e o array de índice 3

/*
* No JS quando se cria um array,  a quantidade de índices podem ser aumentados ou diminuídos
*/
const exemploArray2 = ["Francisco", 25, "João"] 
console.log(exemploArray2[1], exemploArray2[2])// tipos de dados diferentes 
exemploArray2[3] = 44 // inserindo um novo dado no array, de índice 3
console.log(exemploArray2[3])
console.log(exemploArray2)//Exibe todos os dados do array
console.log(exemploArray2.length)//lenght conta a quantidade de índices que possuem dentro do array

exemploArray.push({codigo:2}, false, null, "teste")//push insere novos dados no array
console.log(exemploArray)

console.log(exemploArray.pop())// o .pop() retira o último elemento do array, por isso, não aprecerá mais "teste".
console.log(exemploArray)
delete exemploArray[0] //remove o dado do índice - 0 (zero), nesse caso.
console.log(exemploArray)

