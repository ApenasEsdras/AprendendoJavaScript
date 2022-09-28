
function idade(){
    
    // Chamada dos inputs
    var Idade = document.getElementById('Idade')
    var res = document.getElementById('res')
    var sexo = document.getElementsByName('redSex')
    var img = document.getElementById('image')


    
    // difinição dos genetrtos
    var homem = 'Homem'
    var mulher = 'Mulher'
   

    // conversões
    var AnoNascimento = Number(Idade.value)
    var hoje = new Date() //inpelemtando nova data
    var ano = hoje.getFullYear() //pegando o ano atual com 4 digitos
    AnoNascimento = ano - AnoNascimento    
    

    // validação da idade
    if(Idade.value.length == 0 || Number(Idade.value) > ano){
        alert('[Erra] verifique seu edados')
    }else if(sexo[0].checked) {
        //Male radio button is checked
        res.innerHTML = `Detectamos um ${homem} de ${AnoNascimento} anos`
       
        if( AnoNascimento  <= 12  && AnoNascimento >= 0 ){
            img.src = 'img/cri-m[.jpg'
        }else if(AnoNascimento >= 21 && AnoNascimento  <= 50){
            img.src = 'img/jov-m.jpg'
        }else if(AnoNascimento > 50){
            img.src = 'img/ido-masxc.jpg'
        }         
    
    }else if(sexo[1].checked) {
        //Female radio button is checked
        res.innerHTML = `Detectamos uma ${mulher} de ${AnoNascimento} anos`
        if(AnoNascimento <= 12 ){
            img.src = 'img/cri-fem.jpg'
        }else if(AnoNascimento >= 21 && AnoNascimento <= 60){
            img.src = 'img/jav-Fem.jpg'
        }else if(AnoNascimento > 60){
            img.src = 'img/ido-fem.jpg'
    }        
      }
   
       
   
}