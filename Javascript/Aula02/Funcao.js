/*
Função é algo que executa uma determinada tarefa (um cálculo por exemplo) e que pode ser reutilizada durante a execução de um código, com a alteração dos parâmetros
sem a criação de uma nova função.
*/
function soma(a,b){ // function e o nome da função (pode ser qualquer nome) e dentro dos parênteses são colocados os parâmetros (dados que poderão ser mudados); entre colchetes fica o bloco de código.
    let valor = a + b // cria a variável de nome valor que recebe, nesse caso, a soma de a+b
    console.log(valor)// exibe o valor retornado (soma de a+b)
}

soma(5,15) //declarando o valor dos parâmetros a (5) e b (15).