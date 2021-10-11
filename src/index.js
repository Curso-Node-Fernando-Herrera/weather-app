const { HOME_VALUES } = require('./config/valueOfChoices')
const { useSetHomeOption } = require('./hooks/useSetHomeOption')
const { setHomeMenu } = require('./inquirers/home')
const { setPause } = require('./inquirers/pause')

const startApp = async () => {
  console.clear()
  const option = await setHomeMenu()
  if (option === HOME_VALUES.CANCEL) return
  await useSetHomeOption(option)
  await setPause()
  startApp()
}

startApp()
