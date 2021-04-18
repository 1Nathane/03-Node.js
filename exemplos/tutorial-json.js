const pessoa = {
    nome: 'Nathane',
    sobrenome: 'Mirnada',
    idade: 28
}

console.log('Objeto JS')
console.log(pessoa)

const pessoaJSON = JSON.stringify(pessoa)

console.log('JSON')
console.group(pessoaJSON)

const pessoaJSONtoPessoa = JSON.parse(pessoaJSON)

console.log('Objeto JS de volta')
console.log(pessoaJSONtoPessoa)