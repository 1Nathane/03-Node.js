const request = require('request')
const moment = require('moment')
const chalk =  require('chalk')

const url = 'http://api.marketstack.com/v1/eod?access_key=c5e4cca2984795252f4199f9e3ea635b&symbols=PBR'

request({url: url}, (err, response) => {
    if(err){
        console.log(err)
    }
    const responseObject = JSON.parse(response.body)
    const data = responseObject.data
    console.log(chalk.yellow.bold('Symbol:'), data[0].symbol)
    console.log(chalk.yellow.bold('Date:'), moment(data[0].date, 'YYYY-MM-DDTHH:mm:ss+0000').format('DD/MM/YYYY'))
    // console.log(`Date: ${data[0].date}`)
    console.log(chalk.yellow.bold('Price close:'), `R$ ${data[0].close}`)
})


// const axios = require('axios');
// const params = {
//   access_key: 'c5e4cca2984795252f4199f9e3ea635b'
// }

// axios.get('https://api.marketstack.com/v1/tickers/aapl/eod', {params})
//   .then(response => {
//     const apiResponse = response.data;
//     if (Array.isArray(apiResponse['data'])) {
//         apiResponse['data'].forEach(stockData => {
//               console.log(`Ticker ${stockData['symbol']}`,
//                   `has a day high of ${stockData['high']}`,
//                   `on ${stockData['date']}`);
//         });
//     }
//   }).catch(error => {
//     console.log(error);
//   });