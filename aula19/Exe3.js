//trabalhando com vetores

let num = [1,5,89,4,6,8,0]
num.push(9)
num.sort()
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(4)
if(pos == -1){
    console.log(`O valor não foi encontrado`)
}else {
    console.log(`O valor está na posição ${pos}`)
}