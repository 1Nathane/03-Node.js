const _ = require('lodash')

const meuArrey = [1, 5 , 7, 13, 5, 11]

const novoArrey = _.chunk(meuArrey, 3)

console.log(meuArrey)
console.log(novoArrey)

const diferenca = _.difference(novoArrey[0], novoArrey[1])

console.log(diferenca)

const onde = _.indexOf(meuArrey, 13)

console.log(onde)