



//  exer 1  Crie um programa que imprime os números de 1 a 10 

// for(let i =1; i < 11; i++)

// console.log(i)




//Some todos os valores do Arrays


// const numeros =[1,2,3,4,5];

// const soma = numeros.reduce(function(acc,num){

// return acc + num ;

// },0);

//  console.log(soma)
            


// let nomes = []


// function Salvar(){

//   let nome =document.querySelector('#nome').value;
//   nomes.push(nome);

//   document.querySelector('#resultado').innerHTML =nomes.join(',');


// }

// function Remover(){
//     let valor = document.querySelector('#valor').value;
//     valores.pop();
//     document.querySelector('#mostrar').innerHTML=valores.join(',')
// }


//numeros  pares com array 

// let  numeros = [10,25,14,74,75,80]

// let numerosPares = numeros.filter(function(valor){
//   return valor %2 ===0;
// })

// console.log(numerosPares)



//numeros  impar com array

// let numeros = [1,2,3,4,5,6,7,8]

// let numerosImpar = numeros.filter(function(valor){

//   return valor %2 === 1 ;

// })

// console.log(numerosImpar)


// let numeros = [1,4,2,5,9,45,8]

// let numerosDivisiveis = numeros.filter(function(valor){
//    valor %3 ===0
// }) 

// console.log(numerosDivisiveis)






function alunosAprovados(alunos) {
  

  

  
  const aprovados = [];
  for (let i = 0; i < alunos.length; i++) {
    const notas = alunos[i].notas;
    const media = notas.reduce((total, nota) => total + nota) / notas.length;
    if (media >= 7) {
      aprovados.push(alunos[i]);
    }
  }
  return aprovados;
}




