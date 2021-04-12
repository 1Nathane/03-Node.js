const fs = require('fs')

const arquivo = 'log.txt'

const funcaoImprimirLog = (conteudo) =>{
    
    const data = new Date()
    const dia = data.getDate()
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()
    const hora = data.getUTCHours()
    const minutos = data.getUTCMinutes()
    const segundos = data.getSeconds()

    const dataHora = dia + '/' + mes + '/' + ano + ' ' + hora + ':' + minutos + ':' + segundos
    
    textoLog =  dataHora + ' -> ' + conteudo + '\n'
    fs.appendFileSync(arquivo, textoLog)
} 

module.exports = funcaoImprimirLog


//VERIFICAR FUNCAO MOMENT PARA FORMATAR DATA