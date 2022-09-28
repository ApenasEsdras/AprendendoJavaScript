
function comerPizza1(){ 

    var comerPizza = document.getElementById('Comer')
    var res = document.getElementById('res')
    
    var comerPizza = 0
    while(comerPizza <= 2){
        // console.log(`comeu o ${comerPizza}° pedaço`)
        comerPizza++
        res.innerHTML = `Você comeu o ${comerPizza}° pedaço da Pizza`
    }
}

