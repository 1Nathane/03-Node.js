const request = require('request')
const moment = require('moment')

const api_url = 'http://api.marketstack.com/v1/eod?'
const api_token = 'c5e4cca2984795252f4199f9e3ea635b'

const cotacao = (symbol, callback) => {
    
    const url = `${api_url}access_key=${api_token}&symbols=${symbol}`
    
    request({url: url, json: true}, (err, response) => {
        if(err){
            console.error(err)
        }
        const parsedJSON = response.body.data
        const data = {
            symbol: parsedJSON[0].symbol,
            date: moment(parsedJSON[0].date,'YYYY-MM-DDTHH:mm:ss+0000').format('DD/MM/YYYY'),
            price: `R$ ${parsedJSON[0].close}`
        }
        callback(data)
    })
}

module.exports = {
    cotacao
}