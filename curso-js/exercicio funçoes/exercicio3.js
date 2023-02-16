// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
    
//     exercicio 3  numero par ou impar
// <!-- 
//      <label for="">Digite um numero</label>
//      <input id="num1">
//      <button type="button" onclick="Calcular()">Resultado</button> --> -->

// </body>
// </html>

     

       function Calcular(){

  let num1 = parseInt(document.getElementById("num1").value)


  if (num1 % 2 ==1){
     document.write("numero impar")
  }else{
     document.write("numero par")
  }

}

