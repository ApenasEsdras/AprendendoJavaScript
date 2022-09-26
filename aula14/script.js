
function idade(){
    
    // Chamada dos inputs
    var Idade = document.getElementById('Idade')
    var res = document.getElementById('res')

    var homem = document.getElementById('Homem')
    var mulher =document.getElementById ('Mulher')
    
    var homem = 'Homem'
    var mulher = 'Mulher'
   

    // conversões
    var AnoNascimento = Number(Idade.value)

    // caulculo
    var hoje = 2022
    AnoNascimento = hoje - AnoNascimento 
    // res.innerHTML = `Detectamos um ${homem} de ${AnoNascimento} anos`   
    
    // deifiniçaõ de sexo 
    if(homem.checked) {
        //Male radio button is checked
        res.innerHTML = `Detectamos um ${homem} de ${AnoNascimento} anos`
        image.setAttribute('pexels-andrea-piacquadio-3831645.jpg', 'R.pngpexels-jeswin-thomas-1549004.jpg')
        // document.body.style.background = '#46f97d' 

      }else if(mulher.checked) {
        //Female radio button is checked
        res.innerHTML = `Detectamos uma ${mulher} de ${AnoNascimento} anos`
      }
   
}

