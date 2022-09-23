
var agora = new Date()//saber alguma metrica da maquina =
var hora = agora.getHours() // saber a hora na maquina

console.log(`Sua hora agora é ${hora} h`)

if(hora <= 12 && hora >= 6){
    console.log('Bom dia')
}else if (hora > 12 && hora <= 18){
    console.log('Boa tarde')
}else if(hora <= 22 && hora > 18){
    console.log('Boa noite')
}else if(hora >= 1 && hora <= 5){
    console.log('Boa madrugada')}
