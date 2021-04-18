// const funcaoTesteIncremento = require('./modulo')
// //const sobrenome = require('./modulo');

// const nome = 'Nathane'

// //console.log('Estou em -> app.js')
// //console.log(nome, sobrenome);

// const teste = funcaoTesteIncremento(10, 2)

// console.log('Resultado:',teste)

// const _ = require('lodash')
const chalk = require('chalk')
const { castArray } = require('lodash')
const { demandOption } = require('yargs')
const yargs = require('yargs')

// console.log(process.argv)

// const command = process.argv[3]

// if(process.argv[2] === 'Nathane'){
//     console.log(chalk.blue('Meu nome é:'))
// }
// else{
//     console.log(chalk.red('Esse não é meu nome! \nMeu nome é:'))
// }

// console.log(chalk.black.bgGreen('Nathane'))

//alterando a versão do CLI
yargs.version('2.0.0')

// add -> adicionar uma nova task
// remove -> remover a task
// list -> listar todas as tasks
// read -> ler uma task


// adicionar no builder description e status
//descrição do novo campo
//adicionar o tipo
//imprimir no console.log

yargs.command({
    command: 'add',
    describe: 'Add a new task into the TODO LIST',
    builder: {
        name:{
            describe: 'Task name',
            demandOption: true,
            type: 'string'
        },    
        descricao: {
            describe: 'Task descripsion',
            demandOption: true,
            type: 'string'
        },
        status: {
            describe: 'Task status',
            default: 'BACKLOG',
            type: 'string'
        }
    },
    handler: function (argv){
        console.log(chalk.green('CREATING A NEW TASK'));
        console.log('info')
        console.log(argv.name)
        console.log(argv.descricao)
        console.log(argv.status)
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a task from the TODO LIST',
    handler: function (){
        console.log(chalk.red('REMOVING A TASK'))
    }
})
yargs.command({
    command: 'list',
    describe: 'List all tasks from the TODO LIST',
    handler: function (){
        console.log(chalk.yellow('LISTING OUT ALL PROJECT\'S TASK'))
    }
})
yargs.command({
    command: 'read',
    describe: 'Read a task from the TODO LIST',
    handler: function (){
        console.log(chalk.blue('READING A TASK'))
    }
})

// console.log(process.argv)
// console.log(yargs.argv)

yargs.parse()


