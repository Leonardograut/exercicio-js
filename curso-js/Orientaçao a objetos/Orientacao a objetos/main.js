


exericio 1  Crie um objeto que represente um carro e tenha propriedades como marca, modelo e ano.
Crie um método chamado descricao que exiba uma mensagem de apresentação com as informações do carro.



let carro ={

  marca: "volkswagen",
  modelo:"Polo",
  ano :2015,
  
  descricao:function(){
        console.log(`Carro ${this.carro} da Marca ${this.modelo} do ano ${this.ano}`)
  }
}


carro.descricao();


// --------------------------------------[]

exercicio  2 Crie um objeto que represente uma pessoa e tenha propriedades como nome, idade e profissao. 
Crie um método chamado saudacao que exiba uma mensagem de saudação personalizada com o nome da pessoa.

let pessoa ={
    nome:"leonardo",
    idade:28,
    profissao:"desenvolvedor",

    saudacao:function(){
        console.log(`Saudacao  o my  lord  the best ${this.nome}`)
    }

    
}

pessoa.saudacao();

-------------------------------------------------------------------

exercicio 3 Crie um objeto que represente uma conta bancária e tenha propriedades como saldo e titular.
Crie um método chamado deposito que receba um valor como parâmetro e adicione esse valor ao saldo da conta. 
Crie outro método chamado saque que também receba um valor como parâmetro e subtraia esse valor do saldo da conta.
Use this para se referir ao saldo da conta dentro dos métodos.


let contabancaria ={
    titular:"leonardo",
    saldo:5000,

    deposito:function(valor){
        this.saldo +=valor;
        console.log(`Deposito ${valor} Novo saldo ${this.saldo}`)
    },

    saque:function(valor){
        if(valor < saldo){
            this.saldo -=valor;
            console.log(`Saque ${valor} Novo saldo ${this.saldo}`)
        }else{
            console.log("Vc nao possui Saldo Suficiente para Realizar essa operaçao")
        }

    }
}

contabancaria.deposito(100)
contabancaria.deposito(655)
contabancaria.deposito(800)

-------------------------------------------------------------------------------------
  
 
 Imagine que temos uma lista de tarefas a serem realizadas em um projeto e queremos implementar uma funcionalidade de registro de tempo gasto em cada tarefa.
 Para isso, podemos utilizar uma fila para armazenar as tarefas a serem realizadas e uma pilha para armazenar o tempo gasto em cada tarefa, para que possamos calcular
 o tempo total gasto no projeto. 
  
exercicio 4

let tarefas = []
tarefas.push("Estudar")
tarefas.push("aauhauahaua")
tarefas.push("Dar comida pro cachorro")
tarefas.push("Estudar")

console.log(tarefas)




exercicio 5 
Crie uma função que receba dois arrays de números e retorne a soma de todos os elementos desses arrays.


function SomadosNumeros(num1,num2){
     
    let numero  = [...num1,...num2];
    return numero.reduce((resultado,numero)=> resultado + numero,0)


}

console.log("A Soma dos numeros : " + SomadosNumeros([4,5,6],[7,8,9]))



exericio 6
Crie uma função que receba uma lista de números e retorne o maior número dessa lista.

let array = [5,8,9]

let maiornum =array.reduce(function(a,b){
    return Math.max(a,b)
})

console.log(`O Maior numero entre os 3 numeros e : ${maiornum}`)



let dadosPessoais ={
    nome :"leonardo",
    idade : 28,
    email:"leoleoq@gmail.com",

    ndados:function(){
   
        console.log(`O Nome ${nome} com a  idade: ${idade} e o email ${email}`)
    }


}
 
let novosdados  = new  Novosdados({
    nome :"leonardo",
    idade:28,
    email:"leoleoq@gmail.com",


return {nome: nome.toUpperCase(),idade,email}
    
})


