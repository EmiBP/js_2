
document.addEventListener('DOMContentLoaded', function(){

    const myForm = document.getElementById('myForm');
    

    
    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        
        // Nome
        let inputNome = document.getElementById("nome");
        let alertaVermelhoNome = document.querySelector('.alertNome');
        // Altura
        let inputAltura = document.getElementById("altura");
        let alertaVermelhoAltura = document.querySelector('.alertAltura');
        // Peso
        let inputPeso = document.getElementById("peso");
        let alertaVermelhoPeso = document.querySelector('.alertPeso');
        // Categoria
        let categoria = document.querySelector('#boxCategoria span');

        validaCampos(inputNome, alertaVermelhoNome);
        validaCampos(inputAltura, alertaVermelhoAltura);
        validaCampos(inputPeso, alertaVermelhoPeso);
       
        function validaCampos(inputX, alertX) {
            let boxResult = document.getElementById('boxResult');

            if (inputX.value == "" ) {
                    
                alertX.innerText = 'Campo obrigatório*';
                
                inputX.addEventListener('focus' , function(){
                    alertX.innerText = "";
                })
                
                inputX.addEventListener('change', function(){
                    alertX.innerText = "";
                })


                    
            } else {
                boxResult.style.display ='block';
              
            }
            
          
            
        }
        
       
                                                 
        
        function calculoIMC(altura, peso) {
            let resultIMC = parseFloat(peso / (altura * altura)) ;
            
            if (resultIMC <= 16.9) {
                
                categoria.innerText = 'Muito abaixo do peso';
                
            } else if (resultIMC >= 17 && resultIMC <= 18.4) {
                
                categoria.innerText = 'Abaixo do peso';
                

            } else if (resultIMC >= 18.5 && resultIMC <= 24.9) {
                categoria.innerText = 'Peso normal';

            } else if (resultIMC >= 25 && resultIMC <= 29.9) {
                categoria.innerText = 'Acima do peso';

            }else if (resultIMC >= 30 && resultIMC <= 34.9) {
                categoria.innerText = 'Obesidade';

            } else {
                categoria.innerText = 'Obesidade Morbida';
            }

        }

        calculoIMC(inputAltura.value, inputPeso.value);

       
        let dados = new FormData(myForm);
        let resultIMC = document.getElementById('resultIMC');
            resultIMC.innerHTML = "";
        for (let [chave, valor] of dados.entries()) {
            resultIMC.innerHTML += ` <p>${chave}: ${valor}</p>
                                    `
        }


        inputPeso.value = '';
        inputAltura.value = '';
        inputNome.value = '';
      
    });
});


    