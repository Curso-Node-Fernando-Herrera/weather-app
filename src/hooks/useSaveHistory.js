const fs = require('fs')

const useSaveHistory = (placeName) => {
  const data = fs.readFileSync('db/history.json', { encoding: 'utf-8' })
  const { history } = JSON.parse(data)

  return fs.writeFileSync(
    './db/history.json',
    JSON.stringify({
      history: [...history, placeName],
    })
  )
}

module.exports = {
  useSaveHistory,
}
