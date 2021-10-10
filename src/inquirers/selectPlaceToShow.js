const inquirer = require('inquirer')
require('colors')

const selectPlaceToShow = async (places) => {
  const { placeSelected } = await inquirer.prompt({
    type: 'list',
    message: 'Seleccione uno de estos sitios:',
    name: 'placeSelected',
    choices: places.map(({ name, id }, index) => ({
      name: `${(index + 1).toString().green} ${name}.`,
      value: id,
    })),
  })

  const currentPlace = places.find(({ id }) => id === placeSelected)
  const { name, lng, lat } = currentPlace

  console.log(`Ciudad: ${name}`)
  console.log(`Lat: ${lat}`)
  console.log(`Lng: ${lng}`)
  console.log(`...`)
}

module.exports = {
  selectPlaceToShow,
}
