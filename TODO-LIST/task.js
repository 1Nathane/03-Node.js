const fs = require('fs')
const chalk = require('chalk')
const _ = require('lodash')

const addTask = (name, description, status) => {

    const tasks = loadAllTasks()
    
    // const duplicatedTask = tasks.find(function(task){
    //     return task.name === name
    // })

    const duplicatedTask = tasks.find((task) => task.name === name)

    if(!duplicatedTask){
        const newTask = {
            name,
            description,
            status
        }
        tasks.push(newTask)
        saveTask(tasks)
        const sucessMessage = chalk.green.bold('Task created!')
        console.log(sucessMessage)  
    }else{
        const errorMessage = chalk.red.bold(`Task with name: [${name}] already taken!`)
        console.log(errorMessage)
    }


}

const removeTask = (name) => {
    const tasks = loadAllTasks()

    indiceParaRemover = findATask(name)

    if(indiceParaRemover != null){                      
        _.pullAt(tasks, indiceParaRemover)
        saveTask(tasks)
        
        const sucessMessage = chalk.red.bold('Task excluida!')
        console.log(sucessMessage)
    } else{
        const errorMenssage = chalk.red.bold('Não existe task com esse nome!')
        console.log(errorMenssage)
    }
}

const listTasks = () => {
    const tasks = loadAllTasks()
    console.log(chalk.yellow.bold('Todas as Tasks salvas:'))
    for(var i = 0; i < _.size(tasks); i++){
        console.log(chalk.yellow(tasks[i].name))
    }
}

const readTasks = (name) => {
    const tasks = loadAllTasks()
    const taskindice = findATask(name)
    if(taskindice != null){
        console.log(chalk.blue.bold(`Nome: ${tasks[taskindice].name}\nDescrição: ${tasks[taskindice].description}\nStatus: ${tasks[taskindice].status}`))
    }else{
        const errorMessage = chalk.blue.bold('Não existe task com esse nome!')
        console.log(errorMessage)
    }
    
}

const saveTask = (task) => {
    const tasksJSON = JSON.stringify(task)
    fs.writeFileSync('tasks.json', tasksJSON)
}

const loadAllTasks = () => {
    //ler todas as tarefas
    try {
        const tasksBuffer = fs.readFileSync('tasks.json')
        return JSON.parse(tasksBuffer.toString())
    } catch (error){
        return[]
    }
}

const findATask = (name) => {
    const tasks = loadAllTasks()
    for(var i = 0; i < _.size(tasks); i++){
        try {
            if(name === tasks[i].name){   
                return i
            }   
        } catch (error) {
            const errorMenssage = chalk.red.bold('Erro: Não existe task com esse nome!')
            console.log(errorMenssage)
            return null
            
        }      
    }
}


module.exports = {
    addTask,
    removeTask,
    listTasks,
    readTasks
}