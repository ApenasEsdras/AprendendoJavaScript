let valores = [1,5,1,8,3,6,5,9,84]

//para ordenar
valores.sort()

// //buscar valor e indicar sua posição
// valores.indexOf(8)//dentro dos parentese vai o numero que eu quero encontar

//percurso par a exebição dos valores da arry de forma progreciva
// for(let cont = 0; cont < valores.length; cont++){
//     console.log(`a posição ${cont} tem o valor ${valores[cont]}`)
//     //denytro de vlores eu estou buscando o cont
//     // o cont foi repetido ate o final do arry
// }

// form amais recente do ecmaScript
for ( cont in valores){
    console.log(`a posição ${cont} em o valor ${valores[cont]}`)
}
