const express = require('express')
const cotacao = require('./cotacoes')

const app = express()

//minhaapp.com.br
//minhaapp.com.br/help
//minhaapp.com.br/about

app.get('', (req, res) =>{
    res.send('<h1>Hello minha app</h1>')
})

app.get('/help', (req, res) => {
    res.send('help page')
})

//definir a rota do about
app.get('/about', (req, res) => {
    res.send('about page')
})
//definir uma rota para o /cotacoes

app.get('/cotacoes', (req, res) => {
    const pessoa = {
        nome: 'Nathane',
        idade: 28,
        altura: 1.59,
        peso: 68
    }
    const pessoa2 = new Array()
    pessoa2.push(pessoa)
    pessoa2.push(pessoa)
    res.send(pessoa2)
})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})