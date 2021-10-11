const inquirer = require('inquirer')
const { useSearchWeather } = require('../hooks/useSearchWeather')
require('dotenv').config()
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

  const { temp, temp_max, temp_min, normalizedDescription } =
    await useSearchWeather({ lat, lng })

  console.log(`Ciudad: ${name}`)
  console.log(`Lat: ${lat}`)
  console.log(`Lng: ${lng}`)
  console.log(`Temperatura: ${temp}`)
  console.log(`Temp maxima: ${temp_max}`)
  console.log(`Temp minima: ${temp_min}`)
  console.log(`Descripcion: ${normalizedDescription}`)
}

module.exports = {
  selectPlaceToShow,
}
