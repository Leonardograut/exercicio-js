


 exer 1  Crie um programa que imprime os números de 1 a 10 

 for(let i =1; i < 11; i++)

console.log(i)




//Some todos os valores do Arrays


const numeros =[1,2,3,4,5];

const soma = numeros.reduce(function(acc,num){

return acc + num ;
},0);

 console.log(soma)
            


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

------------------------------------------------
//pegar o tamanho do array  com length

const nomes = ['leo'.'maria','joao','rodrigo']
console.log(nomes.length)

-----------------------------------------------------------
//remmovendo um array no começo com  shift

const nomes = ['leo'.'maria','joao','rodrigo']
const removido = nomes.shift();
console.log(nomes,removido)

-----------------------------------------------

//adicionar  array no final com  push
const nomes = ['leo'.'maria','joao','rodrigo']
nomes.push('recife')
console.log(nomes)

--------------------------------------
//adicionar  elementos no começo do array com unshift

const nomes = ['leo'.'maria','joao','rodrigo']
nomes.unshift('recife')
console.log(nomes)

---------------------------------------------

const nomes = ['leo'.'maria','joao','rodrigo']
nomes.unshift('recife')
console.log(nomes)


-------------------------------------
//fatiar  uma  aray com  slice selecionar
const nomes = ['leo'.'maria','joao','rodrigo','sao paulo']
 const  novo = nomes.slice(1,3)
console.log(novo)

--------------------------------
//retorne os numeros  maior que   10 com filter 

const numeros = [5,50,80,1,4,46,56,3,9,15]

const numerosMaior = numeros.filter(function(valor){
return valor >10


})

console.log(numerosMaior)

-------------------------------------------
 
//retorne as pessoas que tem o nome com  8 letras ou mais
// feito com arrow function

const pessoas =[
 
{nome:'luiz',idade:62},
{nome:'leonardo',idade:50},
{nome:'Rosana',idade:40},
{nome:'vinicius',idade:30},
{nome:'rafael',idade:28},
{nome:'elizadoraleitao',idade:70},
{nome:'leo',idade:45}


]

const pessoasNomeGrande = pessoas.filter(valor=>valor.nome.length >=8)


console.log(pessoasNomeGrande)



-------------------------------------------------------------
//retorne as pessoas que tem o nome com mais de 50 anos
// feito com arrow function

const pessoas =[
 
{nome:'luiz',idade:62},
{nome:'leonardo',idade:50},
{nome:'Rosana',idade:40},
{nome:'vinicius',idade:30},
{nome:'rafael',idade:28},
{nome:'elizadoraleitao',idade:70},
{nome:'leo',idade:45}


]

const pessoasComMaisdeCinquenta = pessoas.filter(valor=>valor.idade >50)


console.log(pessoasComMaisdeCinquenta)




-------------------------------------------------

 
 
 //retorne as pessoas que termine com o


const pessoas =[
 
{nome:'luiz',idade:62},
{nome:'leonardo',idade:50},
{nome:'Rosana',idade:40},
{nome:'vinicius',idade:30},
{nome:'rafael',idade:28},
{nome:'elizadoraleitao',idade:70},
{nome:'leo',idade:45}

]



const pessoasTerminaComO = pessoas.filter(obj =>{

return obj.nome.toLowerCase().endsWith('o')


})


console.log(pessoasTerminaComO)
 
 
 
 ------------------------------------------
 
 
 
 
//numeros  impar com array

 let numeros = [1,2,3,4,5,6,7,8]

 let numerosImpar = numeros.filter(function(valor){

   return valor %2 === 1 ;

 })

 console.log(numerosImpar)
-------------------------------------------------
  
  
//numeros divisiveis  por 3 

 let numeros = [1,4,2,5,9,45,8]

 let numerosDivisiveis = numeros.filter(function(valor){
    valor %3 ===0
 }) 

console.log(numerosDivisiveis)

 --------------------------------------------









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

------------------------------------------------------------------
Escreva uma função ordenarArray que recebe um array de números como parâmetro e retorna o array ordenado em ordem crescente.


let  array = [1,4,7,9,8]

function ordenarArray(array) {
     
    let arrayOrdenado = array.sort()

    return arrayOrdenado
    
}

console.log(ordenarArray(array));








exercicio 1

Crie um Array chamado "cores" com as cores vermelho, verde e azul, e adicione a cor amarela ao final do Array.


const pessoas =[
 
    {cor:'azul'},
    {cor:'vermelho',},
    {cor:'azul'},
    {cor:'laranja'}
    
]
 

pessoas.push('amarela')
console.log(pessoas)
*/






---------------------------------------------------------------------------



exercicio  2 
Crie uma função que receba um Array como argumento e retorne o maior número do Array.

function MaiorNumero(array){

    const MaiorNumero = array.reduce((acumulador,valor)=>{

     if(acumulador < valor){
         acumulador = valor
         return acumulador
     }

    },0)

return MaiorNumero

}
console.log(MaiorNumero(Maior));





-----------------------------------------------------------------


 // exercicio 3
 Crie uma função que receba um Array de strings como argumento e retorne um novo Array com todas as strings em letras maiúsculas.


const nomes =['leo','maria','joao','mario']



function Nomes(array){
 const NomesString = array.join(",") 
 const NomesString2=NomesString.toUpperCase();
 const NomesStringArray = NomesString2.split(',')

 return  NomesStringArray

}



console.log(Nomes(nomes));
 
 
 
 
 
 
 
 
 -----------------------------------------------------------------------------------------
 
 exercicio 4  
Crie uma função que receba dois Arrays como argumentos e retorne um novo Array com todos os elementos dos dois Arrays, sem duplicatas.

const  Arrays1 = [1,2,2,3]
const Arrays2 = [1,2,2,3,3,4,4]
function Arrays(arrays,arrays2){  
const NovoArray = [
    ...arrays,
    ...arrays2
]
 const Array =  NovoArray.filter((valor,index)=>{

  return NovoArray.indexOf(valor) === index; 


 })
 return Array;
}
console.log(Arrays(Arrays1,Arrays2))

 
 
 
 
 -----------------------------------------------------------------------------------------------------
 exercicio 5 crie uma funçao que receba um array de numeros  como argumento e retorne a media dos numeros 

const Numeros = [1,2,3,4,5,7,8,9]



function Media(Numero){   

    const SomasdasNotas = Numero.reduce((acumulador,valor)=>{
        acumulador += valor
        return  acumulador
    },0);

    let mediaAluno = SomasdasNotas / Numero.length
    return mediaAluno.toFixed(2);
}

console.log(Media(Numeros))
 
 
 
 ------------------------------------------------------------------
 
exercicio 6 com numeros  pares

 const numeros = [1,2,3,4,5,7,8,9]

  const numerosPar = numeros.filter(function(valor){

  return valor  %2 === 0

   })
 console.log(numerosPar)

 
 
 ----------------------------------------------------------------
 
 exercicio 7 com numeros impares


 const numeros = [1,2,3,4,5,7,8,9]



 const numerosPar = numeros.filter(function(valor){

   return valor  %2 == 1

 })

 console.log(numerosPar)

 ---------------------------------------------
 
 
 
 
 
 
 
 
 
 




