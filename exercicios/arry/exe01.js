let num = document.querySelector('input#fnum')//chamada do fnum = aria de inserção dos dados iniciasis
let lista = document.querySelector('select#flista')//chamada da llsta de exibição
let res = document.querySelector('div#res')//mastrar resultados

let valores = []//Vetor vazia

//verifica se o numero esta netre 1 e 100
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){// se o numero inserido for diferente de -1
        return true
    }else{
        return false
    }
}


//verifica se o numero é igual ou repitido e se ele e invalido
function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){// so será adc se for vdd os dois lists&&num
       valores.push(Number(num.value))
       let item = document.createElement('Option')
       item.text = `valor ${num.value} adicionado`
       lista.appendChild(item)
       res.innerHTML = ''
    }else{
        alert('Valor inválidao ou já existente na lista')
    }
}

function finalizar(){
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]

        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<P> Ao total temos ${tot} numeros cadastrados.</p>`
        res.innerHTML +=  `<P>O maior valor informado foi ${maior}</P>`  
        res.innerHTML +=  `<P>O menor valor informado foi ${menor}</P>`  
        res.innerHTML += `<P> Somando os vaores, temos ${soma}</P>`
        res.innerHTML += `<P> A media dos valores digitados éigual a ${media}</P>`
    }
    
}