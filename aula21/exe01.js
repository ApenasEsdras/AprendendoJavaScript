let amigo = {nome: 'jose',
sexo: 'M',
pesa: 83,
engordar(p=0){
 console.log('engordou')
 this.pesa += p
}
}

amigo.engordar(2)
console.log(`${amigo.nome} peso ${amigo.pesa}`)