function contar(){
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    res.innerHTML = ''

    if (i == 0 || f == 0){
        alert('[Err] Dados faltando')//alertar se o ini ou o fim tem valor 0, se sim ira retornar uma mensagem de alerta
    }

    //verifica se o passo tem valor igua e 0 e se sim ele autera i valor de p acressentando 1
    else if(p == 0){
        p++
        for( let c = i; c <= f; c += p){
            res.innerHTML += `&#x1F449 ${c}`
        }
          

        //verifica se o Fim e Maior q o Inicio e coloca o svalores em ordem decrescente
    }else if( f < i ){
        for( let c = i; c >= f; c -= p){
            res.innerHTML += `&#x1F449 ${c}`//coloca o emogi e o resultado 
        }
        
    }
    // else if( f < i && p == 0){
    //     p++
    //     for( let c = i; c >= f; c -= p){
    //         res.innerHTML += `&#x1F449 ${c}`//coloca o emogi e o resultado 
    //     }
    // }

    else{
        for( let c = i; c <= f; c += p){
            res.innerHTML += `&#x1F449 ${c}`//coloca o emogi e o resultado 
        }
      
    }
    res.innerHTML +=  `${''}&#x1F3C1`
}
