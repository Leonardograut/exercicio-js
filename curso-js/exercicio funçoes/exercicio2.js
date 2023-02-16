
    //  <!-- <div class="resultado">
    // <label for=""> Base</label><br>
    // <input id="b"><br>
    // <label for=""> Altura</label><br>
    // <input id="h"><br>
    // <p id="resultado"></p>
    // <button type="button" onclick="Calcular()"  > Resultado</button>
    // </div>  -->


    

    //  exercicio 2  ) Crie uma função que calcule a área de um triângulo a partir de sua base e altura:


function Calcular(){

  let a = parseInt(document.getElementById("b").value);
  let h = parseInt(document.getElementById("h").value);
  


  document.getElementById("resultado").innerHTML = "O resultado  da operaçao  entre base e altura e "+(a*h)/2

 }
   
