/*Estrutura de controle encadeada*/

/* Verificar se o número informado é menor do que 10, ou menor do que 20, ou menor do que 30
e também se o número informado é maior do que 30. */

function recebeValor(valor){

    if(valor < 10){
        console.log("O valor informado é menor do que 10")
        }else{
            if(valor < 20){
            console.log("O valor informado é menor do que 20")
            }else
                if(valor < 30){
                console.log("O valor informado é menor do que 30")
             }else{
                console.log("O valor é maior do que 30")
        }
    }
}

recebeValor(15);
