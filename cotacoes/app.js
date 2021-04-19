const cotacao = require('./util/cotacao')

// const url = 'http://api.marketstack.com/v1/eod?access_key=c5e4cca2984795252f4199f9e3ea635b&symbols=PBR'

cotacao.cotacao('PBR', (data) => {
    console.log(data)
})