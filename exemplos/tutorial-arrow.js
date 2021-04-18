// const add = function(a, b){
//     return a + b
// }

// const add = (a, b) => {
//     return a + b
// }

// const add = (a, b) => a + b

// console.log(add(2,5))

const car = {
    name: 'Ferrari',
    itens: ['expendive', 'fast', 'red'],
    start(){
        console.log('Starting', this.name)

        this.itens.forEach((item) => {
            console.log('My', this.name, ' is ', item)
        })
    }
}

car.start()