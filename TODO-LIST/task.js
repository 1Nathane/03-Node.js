const fs = require('fs')
const chalk = require('chalk')
const _ = require('lodash')

const addTask = function(name, description, status){
    const tasks = loadAllTasks()
    
    const duplicatedTask = tasks.find(function(task){
        return task.name === name
    })

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

const removeTask = function(name){
    const tasks = loadAllTasks()

    var indiceParaRemover = null

    for(var i = 0; i < _.size(tasks); i++){
        try {
            if(name === tasks[i].name){   
                indiceParaRemover = i
            }   
        } catch (error) {
            const errorMenssage = chalk.red.bold('Erro: Não existe task com esse nome!')
            console.log(errorMenssage)
            
        }      
    }
    if(indiceParaRemover != null){                      
        _.pullAt(tasks, indiceParaRemover)
        fs.writeFileSync('tasks.json',JSON.stringify(tasks))
        
        const sucessMessage = chalk.green.bold('Task excluida!')
        console.log(sucessMessage)
    } else{
        const errorMenssage = chalk.red.bold('Não existe task com esse nome!')
        console.log(errorMenssage)
    }
}

const listTasks = function(){
    const tasks = loadAllTasks()
    console.log(chalk.yellow.bold('Todas as Tasks salvas:'))
    for(var i = 0; i < _.size(tasks); i++){
        console.log(chalk.yellow(tasks[i].name))
    }
}

const saveTask = function(task){
    const tasksJSON = JSON.stringify(task)
    fs.writeFileSync('tasks.json', tasksJSON)
}

const loadAllTasks = function(){
    //ler todas as tarefas
    try {
        const tasksBuffer = fs.readFileSync('tasks.json')
        return JSON.parse(tasksBuffer.toString())
    } catch (error){
        return[]
    }
}


module.exports = {
    addTask,
    removeTask,
    listTasks
}