const fs = require('fs')

//objeto criado
const pessoa = {
    nome: 'Nathane',
    sobrenome: 'Miranda',
    idade: 28
}

//converter o objeto JS em JSON

const pessoaJSON = JSON.stringify(pessoa)

//gravar em um arquivo o conteúdo
fs.writeFileSync('pessoa.json',pessoaJSON)

//recuperar o conteúdo do arquivo JSON
const pessoaContent = fs.readFileSync('pessoa.json')

// console.log(pessoaContent.toString())

const pessoaDeVoltaComoObjeto = JSON.parse(pessoaContent.toString())
// console.log(pessoaDeVoltaComoObjeto)
// console.log(pessoaDeVoltaComoObjeto.nome)

//criar um objeto chamado carro com alguns atributos 

const carro = {
    marca: 'FIAT',
    modelo: 'UNO',
    ano: '2015',
    cor: 'Cinza'
}

//converter ele em JSON

const carroJSON = JSON.stringify(carro)

//gravar em um arquivo chamado carro.json

fs.writeFileSync('carro.json', carroJSON)

//recuperar esse objeto (JSON -> object)

const carroJSONdeVolta = fs.readFileSync('carro.json')

// alterar algum atributo

const carroJSONdeVoltaEObjeto = JSON.parse(carroJSONdeVolta.toString())
console.log(carroJSONdeVoltaEObjeto)

carroJSONdeVoltaEObjeto.cor = 'Vermelho'

// salvar no arquivo novamente

fs.writeFileSync('carro.json', JSON.stringify(carroJSONdeVoltaEObjeto))

// validar o arquivo carro.json
console.log(carroJSONdeVoltaEObjeto)

