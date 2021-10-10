const { HOME_VALUES } = require('../config/valueOfChoices')

const useSetHomeOption = async (option) => {
  return await listOfFunctions[option]()
}

const listOfFunctions = {
  [HOME_VALUES.SEARCH]: () => {
    console.log('hola mundo')
  },
  [HOME_VALUES.HISTORY]: () => {},
}

module.exports = {
  useSetHomeOption,
}
