    

   function soma(){

        var valorUm = document.getElementById("numUm").value;
        console.log(valorUm)
        var valorDois = document.getElementById("numDois").value;
        console.log(valorDois)

            var resultado = parseInt(valorUm) + parseInt(valorDois);
            mensagemAlerta(resultado)

   }
    function subtrair(){

        var valorUm = document.getElementById("numUm").value;
        console.log(valorUm)
        var valorDois = document.getElementById("numDois").value;
        console.log(valorDois)


        var resultado = parseInt(valorUm) - parseInt(valorDois);

        mensagemAlerta(resultado)
    
   }
    function dividir(){

        var valorUm = document.getElementById("numUm").value;
        console.log(valorUm)
        var valorDois = document.getElementById("numDois").value;
        console.log(valorDois)

        var resultado = parseInt(valorUm) / parseInt(valorDois);

        mensagemAlerta(resultado)

   }
    function multiplicar(){

        var valorUm = document.getElementById("numUm").value;
        console.log(valorUm)
        var valorDois = document.getElementById("numDois").value;
        console.log(valorDois)

        var resultado = parseInt(valorUm) * parseInt(valorDois);

        mensagemAlerta(resultado)

    
   }


   function porcentagem(){

        var valorUm = document.getElementById("numUm").value;
        console.log(valorUm)
        var valorDois = document.getElementById("numDois").value;
        console.log(valorDois)

        var aux = parseInt(valorUm) * 100;

        var resultado = aux/parseInt(valorDois);

        mensagemAlerta(resultado)


    }


   function mensagemAlerta(resultado){
        alert("O Resultado é:" + " " + resultado)

   }

   function mensagemErro(){
        alert("Por favor, preencha os campos de valor 1 e 2 para efetuar o cálculo!")
   }




 
