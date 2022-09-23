var diaDaSemana = new Date() // saber o dia
var hoje = diaDaSemana.getDay()// puchar o dia de hj

/*
    DIAS DA SEMANA ENTENDIDOS PELA JS
    0 = Domingo 
    1 = segunda
    2 = terça
    3 = quarta
    5 = quinta
    6 = sexta
    7 = sabado
*/

/* 

    O Switch case é mais usual em casos 
    em que precisa-se saber um valor pntual

*/

// var hoje = 8
switch(hoje){
    case 0:
        console.log('Domingo')
        break   
    case 1:
        console.log('Segunda')
        break   
    case 2:
        console.log('Terça')
        break   
    case 3:
        console.log('Quarta')
        break   
    case 4:
        console.log('Quinta')
        break   
    case 5:
        console.log('Sexta')
        break   
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERR] Dia invalido')   
}