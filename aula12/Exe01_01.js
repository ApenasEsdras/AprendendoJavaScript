var idade = 50

console.log(`Vc tem ${idade}`)

if (idade < 16){
    console.log('não vota')
}else if(idade <= 18 || idade >= 67){
        console.log('Voto opicional')
    }else{
        console.log('voto Obrigatório')
    }
