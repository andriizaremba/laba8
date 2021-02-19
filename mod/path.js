const path = require('path')
const chalk = require('chalk')

console.log(chalk.blue('Назва файлу: ', path.basename(__filename)))
console.log(chalk.blue('Назва директорії: ', path.dirname(__filename)))
console.log(chalk.blue('Розширення файлу: ', path.extname(__filename)))
console.log(chalk.blue('Parse: ', path.parse(__filename)))
console.log(chalk.blue(path.join(__dirname, 'index.js')))