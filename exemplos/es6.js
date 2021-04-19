// Criar um CLI usando Yargs
// vai receber um parametro de entrada que vai ser o codigo do ativo na bolsa de valores
// se não receber o ativo, retornar um erro
// se receber, deve consultar o ativo usando o request
// devolver o valor de abertura, valor de fechamento, maior alta do dia, menor baixa do dia
// mostrar os valores de baixa em vermelho com chalk
// mostrar valores de alta de azul
// utilizar es6
// utilizar destruct

const yargs = require('yargs')
const cotacao = require('./cotacao2') 
const chalk = require('chalk')

yargs.command({
    command: 'consulta',
    describe: 'Consulta um ativo na bolsa de valores',
    builder: {
        ativo:{
            describe: 'Ativo na bolsa de valores',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {

        cotacao.cotacao(argv.ativo, (data) => {
            console.log(chalk.yellow('Abertura: R$',data.open))
            console.log(chalk.yellow('Fechamento: R$',data.close))
            console.log(chalk.blue('Maior valor do dia: R$', data.high))
            console.log(chalk.red('Menor valor do dia: R$', data.low))
        })
    }
})

yargs.parse()