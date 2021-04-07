    function Imc() {

       
        var nome = document.querySelector(".nome").value;
        var peso = document.querySelector(".peso").value;
        var altura = document.querySelector(".altura").value;
        var resultado = document.querySelector(".resultado");

        var valorImc = parseFloat(peso) / (parseFloat(altura * altura));
        var grau = "";

        if ( valorImc < 18.5) {
            grau = 'Magreza';
        }
        else if ( valorImc >= 18.5 && valorImc <= 24.9) {
            grau = 'Saudável';
        }
        else if ( valorImc >= 25 && valorImc <= 29.9) {
            grau = 'Sobrepeso';
        }
        else if ( valorImc >= 30 && valorImc <= 34.9) {
            grau = 'Obesidade grau 1';
        }
        else if ( valorImc >= 35 && valorImc <= 39.9) {
            grau = 'Obesidade grau 2 (severa)';
        }
        else if ( valorImc >= 40) {
            grau = 'Obesidade grau 3 (morbida)';
        }

        resultado.textContent = nome + ' seu IMC é ' + valorImc.toFixed(1) + ' e sua classificação é ' + grau;
            
    }


    