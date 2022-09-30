let num  = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')

let valores = []

//ações para se addc valores ao select

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <=100 ){// esse n vai ser chamado pelo num.value la dentro da chamada()
        return true
    }else{
        return false
    }
}
function islista(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !islista(num.value, valores)){
        valores.push(Number(num.value))//sendo atendida a condição, será a inserido ao final do arry o num.valu fornecido pelo cliente.
        let item = document.createElement('option')
        item.text = num.value//autera o text de intem para num.value
        lista.appendChild(item)//exibe no select o valor de item q é igual e num.value
        res.innerHTML = ''
        
    }else{
        alert('[Err] valor invalidao ou já inserido')
    }
}


//ações para se exibir resultados

function finalizar(){
    if(valores == 0){
        alert('Adicione alguem valor')
    }else{
        let tot = valores.length
        let maior = valores[0]//maior vai ter valor 0, pois eles é o primeiro e unico valor 
        let menor = valores[0]//menor tbm vai ter valor 0, pois eles é o primeiro e unico valor 

        let soma = 0
        let media = 0

        //verificação dos valores
        for(let posicao in valores){//para cada posicao em volores faca:
            soma += valores[posicao]//vai somar de dorma progressiva os valore incrementados por podicao
            if (valores[posicao] > maior)//
            maior = valores[posicao]
            if (valores[posicao] < menor){
                menor = valores[posicao]
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