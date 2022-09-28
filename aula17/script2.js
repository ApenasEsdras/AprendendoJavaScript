 function Tabuada(){
     console.log('DeuCerto')
     var numero = document.getElementById('MinTab')
     var resultado = document.getElementById('Tabuada')
    
     resultado.innerText = ''

     if(numero.value == ''){
       alert('[Erro] aria sem numero sera considerado 0')
        for(var i = 0; i <=10; i++){
      
        resultado.innerHTML += `<br> 0 * ${i} = ${numero.value * i}`       
     }
     }
     else{
        for(var i = 0; i <=10; i++){
            // resultado.innerText +=;
            resultado.innerHTML += `<br> ${numero.value} * ${i} = ${numero.value * i}`       
         }
     }

    
}

// funma mais simples e pratiCA
//  function Tabuada(){
//      console.log('DeuCerto')
//      var numero = document.getElementById('MinTab');
//      var resultado = document.getElementById('Tabuada');
//      // Auterar a div para exinir o resuldo
//      resultado.innerText = '';

//      for(var i = 0; i <=10; i++){
//         var div = document.createElement('div');
//         div.innerText = numero.value * i;
//         resultado.appendChild(div);
//      }
// }
