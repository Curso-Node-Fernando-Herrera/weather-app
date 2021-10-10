const { HOME_VALUES } = require('./config/valueOfChoices')
const { useSetHomeOption } = require('./hooks/useSetHomeOption')
const { setHomeMenu } = require('./inquirers/home')

const startApp = async () => {
  const option = await setHomeMenu()
  if (option === HOME_VALUES.CANCEL) return
  await useSetHomeOption(option)
  startApp()
}

startApp()
