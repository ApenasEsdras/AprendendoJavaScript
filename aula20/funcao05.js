//RECURSIVIDADE
function fatorial(n){// inserção de parãmetro
    if(n == 1){//ação
        return 1
    }else{
        return n * fatorial(n - 1)//ação de chamada da propria função
    }
}
console.log(fatorial(8))

/*

5! = 5 x 4 x 3 x 2 x 1 
5! = 5 x 4!


n! = n x (n-1)!

1! = 1
*/