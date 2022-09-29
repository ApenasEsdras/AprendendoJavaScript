function Somar(){
    console.log('ok')

    let escolha = document.getElementById('Escolher')
    let res = document.getElementById('res')

 

    if(escolha.value.length == 0){//verifica se o numero de entrada e igual e 0, se for alerta a falta de 
        alert('[Err] Digite um numero!!')
    } else{
        let n = Number(escolha.value)//converter string para numero
        let c = 1
        //para poder limpar a ultima atualização
        res.innerHTML = ''
        while(c <= 10){//validação para lupin de 10x
            //criação de div
            let item = document.createElement('option')
            // chamada da option e incremento da logica
            item.text = `${n} X ${c} = ${n*c}`
            //incremento do value
            item.value = `res${c}`
            //exibir resposta no select
            res.appendChild(item)
            //incemento de mais um no lupin
            c++
        }
    }
    

}