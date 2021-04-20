const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))

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