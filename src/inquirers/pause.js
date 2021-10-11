const inquirer = require('inquirer')
require('colors')

const setPause = async () => {
  return await inquirer.prompt({
    type: 'input',
    message: `\nPresione ${'ENTER'.green} para continuar\n`,
    name: 'outPause',
  })
}

module.exports = {
  setPause,
}
