// criar uma função async de somar dois parâmetros 
//usar p setTimeout dentro da funão soma
// depois de 3 segundos dentro do método de soma, retornar o resultado da soma

const soma = (parcela1, parcela2, callback) => {
    setTimeout (() => {
        const soma = parcela1 + parcela2
        // console.log(soma)
        callback(soma)
    },3000)
}

// soma(2,3)

soma(2,500, (data) => {
    console.log(data)
})