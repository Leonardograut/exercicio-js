


//exericio 1


// let carro ={

//   marca: "volkswagen",
//   modelo:"Polo",
//   ano :2015,
  
//   descricao:function(){
//         console.log(`Carro ${this.carro} da Marca ${this.modelo} do ano ${this.ano}`)
//   }
// }


// carro.descricao();


// --------------------------------------[]

// //exercicio 2
// let pessoa ={
//     nome:"leonardo",
//     idade:28,
//     profissao:"desenvolvedor",

//     saudacao:function(){
//         console.log(`Saudacao  o my  lord  the best ${this.nome}`)
//     }

    
// }

// pessoa.saudacao();



//exercicio 3

// let contabancaria ={
//     titular:"leonardo",
//     saldo:5000,

//     deposito:function(valor){
//         this.saldo +=valor;
//         console.log(`Deposito ${valor} Novo saldo ${this.saldo}`)
//     },

//     saque:function(valor){
//         if(valor < saldo){
//             this.saldo -=valor;
//             console.log(`Saque ${valor} Novo saldo ${this.saldo}`)
//         }else{
//             console.log("Vc nao possui Saldo Suficiente para Realizar essa operaçao")
//         }

//     }
// }

// contabancaria.deposito(100)
// contabancaria.deposito(655)
// contabancaria.deposito(800)


//exercicio 4

// let tarefas = []
// tarefas.push("Estudar")
// tarefas.push("Limpar a casa")
// tarefas.push("Dar comida pro cachorro")
// tarefas.push("Estudar")

// console.log(tarefas)




// //exercicio 5

// function SomadosNumeros(num1,num2){
     
//     let numero  = [...num1,...num2];
//     return numero.reduce((resultado,numero)=> resultado + numero,0)


// }

// console.log("A Soma dos numeros : " + SomadosNumeros([4,5,6],[7,8,9]))



// // exercicio 6
// let array = [5,8,9]

// let maiornum =array.reduce(function(a,b){
//     return Math.max(a,b)
// })

// console.log(`O Maior numero entre os 3 numeros e : ${maiornum}`)



// let dadosPessoais ={
//     nome :"leonardo",
//     idade : 28,
//     email:"leoleoq@gmail.com",

//     ndados:function(){
   
//         console.log(`O Nome ${nome} com a  idade: ${idade} e o email ${email}`)
//     }


// }
 
// let novosdados  = new  Novosdados({
//     nome :"leonardo",
//     idade:28,
//     email:"leoleoq@gmail.com",


// return {nome: nome.toUpperCase(),idade,email}
    
// })


