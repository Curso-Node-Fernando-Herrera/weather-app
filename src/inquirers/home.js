const inquirer = require('inquirer')
require('colors')

const { HOME_VALUES } = require('../config/valueOfChoices')

const setHomeMenu = async () => {
  const { option } = await inquirer.prompt({
    type: 'list',
    name: 'option',
    message: 'Elige una opcion:',
    choices: [
      {
        name: `${'1.'.green} Buscar lugar.`,
        value: HOME_VALUES.SEARCH,
      },
      {
        name: `${'2.'.green} Historial.`,
        value: HOME_VALUES.HISTORY,
      },
      {
        name: `${'3.'.green} Cancelar.`,
        value: HOME_VALUES.CANCEL,
      },
    ],
  })

  return option
}

module.exports = {
  setHomeMenu,
}
