const { HOME_VALUES } = require('../config/valueOfChoices')
const { useSearchPlace } = require('./useSearchPlace')
const { useShowHistory } = require('./useShowHistory')

const useSetHomeOption = async (option) => {
  return await listOfFunctions[option]()
}

const listOfFunctions = {
  [HOME_VALUES.SEARCH]: useSearchPlace,
  [HOME_VALUES.HISTORY]: useShowHistory,
}

module.exports = {
  useSetHomeOption,
}
