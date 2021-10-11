const fs = require('fs')
require('colors')

const useShowHistory = () => {
  const data = fs.readFileSync('./db/history.json', { encoding: 'utf-8' })
  const { history } = JSON.parse(data)

  history.forEach((singlePlace, index) =>
    console.log(`${(index + 1).toString().green}. ${singlePlace}.`)
  )
}

module.exports = {
  useShowHistory,
}
