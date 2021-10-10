const inquirer = require('inquirer')

const searchPlace = async () => {
  const { place } = await inquirer.prompt({
    type: 'input',
    message: 'Introduce el nombre del lugar:',
    name: 'place',
    validate(value) {
      if (value.trim().length === 0) return 'Necesitas escribir algo'
      return true
    },
  })

  return place
}

module.exports = {
  searchPlace,
}
