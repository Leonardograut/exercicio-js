




// //exercico 1

// function numint(){
//     return new Promise((resolve,reject)=>{

//         const num1 =parseInt(prompt('Digite um numero inteiro'))
//          if(num1){   
//        setTimeout(() => {
//         resolve(num1*2)
//        }, 1000);
//     }else{
//        reject('operacao errada')
//     }
// })

// }


// numint(2)
// .then((result)=>{
//    document.write(result)
// })
// .catch((erro)=>{
//    document.write(erro)
// })



//exercicio 2
// function elevarAoQuadrado(num) {
//     return new Promise((resolve, reject) => {
//       if (Number.isInteger(num)) {
//         setTimeout(() => {
//           resolve(num ** 2);
//         }, 2000);
//       } else {
//         reject("O valor informado não é um número inteiro.");
//       }
//     });
//   }

  
//   elevarAoQuadrado(8)
//   .then(resultado => document.write(resultado)) // 25
//   .catch(erro => document.write(erro));



//exercicio 3
// function numeros(){
//   return new Promise((resolve,reject)=>{

//     const num1 =parseInt(prompt('Digite um numero inteiro'))
//     const num2 =parseInt(prompt('Digite outro numero inteiro'))
       
//     if(num1 && num2 % 2 ===0){
//         setTimeout(()=>{
//             resolve(num1 +num2)
//         }, 3000);
//        }else{
//         reject('Os valores informados nao sao inteiros')
//        }
 
//   })

// }
// numeros(-0)
// .then((result)=>{
//     console.log(result)
// })

// .catch((erro)=>{
//    console.log(erro)
// })


//



// exercicio 4 


// function multiplicar(x, callback){
//  const resultado = x*2
//   //console.log(valor)
//   callback(resultado)
// }

// function Mostrar(resultado){
//  console.log('O resultado da operacao e '+ resultado)
// }

// Mostrar(5,2, multiplicar)




// exercicio5
// function num(x, callback){
//     const valor =Math.pow(x,2)
//     callback(valor)
// }

// function Mostrar(resultado){
//     console.log('O resultado da operacao e '+ resultado)
// }

// num(6,Mostrar)




//exercicio 6 
function num(num1,num2, callback){

    
    
    
    if(num1 && num2 %2==0 ){
      const valores = num1 +num2
      
        callback(valores)
    }else{
      callback('error')
    }
}

function Mostrar (notfund,resultado){   
 if(notfund = null){
    console.log(' Resultado Incorreto ' +notfund)
 }else{
    console.log(' O Resultado dos valores ' +resultado)
 }

}


num(5.5,3, Mostrar)


num(5,2, Mostrar)