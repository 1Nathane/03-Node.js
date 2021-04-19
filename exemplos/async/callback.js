// console.log('antes')



// console.log('depois')

const getPrice = (symbol, callback) => {
    setTimeout(() => {
        const data = {
            symbol: 'PETR4.SA',
            price: 38
        }
        callback(data)
    }, 2000)

}

// const price = getPrice('PETR4.SA')
// console.log(price)

getPrice('PETR4.SA', (data)=>{
    console.log(data)
})