const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

/*
fs.mkdir(path.join(__dirname, 'mod'), (err) => {
   if (err) {
       throw err
   }

   console.log('Папка створена')
})
*/

const filePath = path.join(__dirname, 'mod', 'test.txt')

/*
fs.writeFile(filePath, 'Hello Andrii', err => {
    if (err) {
        throw err
    }
    
    console.log('Файл створений')
})

fs.appendFile(filePath, '\nHello Again', err => {
    if (err) {
        throw err
    }
    
    console.log('Файл створений')
})
*/

fs.readFile(filePath, 'UTF-8', (err, content) => {
    if (err) {
        throw err
    }

    console.log(chalk.blue('Content: '), content)
})