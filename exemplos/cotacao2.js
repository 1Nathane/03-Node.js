const request = require('request')
const chalk = require('chalk')

const api_url = 'http://api.marketstack.com/v1/eod?'
const api_token = 'c5e4cca2984795252f4199f9e3ea635b'

const cotacao = (symbol, callback) => {
    
    const url = `${api_url}access_key=${api_token}&symbols=${symbol}`
    
    request({url: url, json: true}, (err, response) => {
        if(err){
            console.error(err)
        }
        const parsedJSON = response.body.data[0]
        const {open, close, high, low} = parsedJSON
        const data = {open, close, high, low}
        //     abertura: `R$ ${parsedJSON[0].open}`,
        //     close_price: `R$ ${parsedJSON[0].close}`,
        //     high_day: chalk.blue(toString(parsedJSON[0].high)),
        //     low_day: `R$ ${parsedJSON[0].low}`
        // }
        callback(data)
    })
}

module.exports = {
    cotacao
}