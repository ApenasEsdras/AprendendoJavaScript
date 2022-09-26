
function Carregar(){
var msg = document.getElementById('msg')
// var img = document.querySelector("#image");//forma moderna de se fazer a auteração
var image = document.getElementById('image')
var data = new Date()
var hora = data.getHours()

// var hora = 6
msg.innerHTML = `<h1>Agora são ${hora} horas </h1>`

if(hora >= 0 && hora < 12){
    image.src = 'R.png'
    document.body.style.background = '#46f97d'
}else if(hora >= 12 && hora < 18){
    image.src = 'tarde.jpeg'
    document.body.style.background = '#c7b352'
}else{
    image.src = 'noite.jpeg'
    document.body.style.background = '#334152'//altera a cor do body ou outro elemento selecionado
    document.body.style.color = 'blue'//aletra a cor das letras
}

// Meto do de trocar um elemento por outro
// if(hora >= 0 && hora < 12){
//     image.setAttribute('src', 'R.pnh')
// }else if(hora >= 12 && hora < 18){
//     image.setAttribute('src', 'tarde.jpeg')
// }else(
//     image.setAttribute('src', 'noite.jpeg')
// )

}