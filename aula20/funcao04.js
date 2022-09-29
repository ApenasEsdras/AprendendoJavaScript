//buscar fatoril de forma direta
function fatorial(n){
    let fat = 1 //serve para fazer o calculo de forma decrecente
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

//Soma de fatorial


// 5! = 5x4x3x2x1