// <!-- <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
    
//       exercicio 4
//     <label for="">Digite o primeiro numero</label>
//     <input id="num1" type="number">
//     <label for="">Digite o segundo numero</label>
//     <input id="num2" type="number">
//     <label for="">Digite o terceiro numero</label>
//     <input id="num3" type="number">
//     <p id="resultado"></p>
//     <button type="button" onclick="Calcular()">Calcular</button> -->

 

// </body>
// </html>

 //exercicio 4  maior numero
function Calcular(){

   var num1 = parseFloat (document.getElementById("num1").value);
  var  num2 = parseFloat(document.getElementById("num2").value);
  var num3 = parseFloat(document.getElementById("num3").value);
  var maior =num1
  

   if(num2 > maior)
    maior = num2
      
 if(num3 > maior)
     maior =  num3
  
  
   document.getElementById("resultado").innerHTML=(`O MAIOR NUMERO E: ${maior}`) 




}
