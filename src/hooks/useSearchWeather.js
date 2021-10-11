const { default: axios } = require('axios')
require('colors')

const useSearchWeather = async ({ lat, lng }) => {
  try {
    const axiosWeather = axios.create({
      baseURL: process.env.WEATHER_BASE,
      params: {
        lat: lat.toString(),
        lon: lng.toString(),
        units: 'metric',
        lang: 'es',
        appid: process.env.WEATHER_KEY,
      },
    })

    const { data } = await axiosWeather.get()
    const { weather, main } = data

    const { temp, temp_min, temp_max } = main
    const normalizedDescription = weather
      .map(({ description }) => description)
      .join(' - ')

    return {
      temp,
      temp_max,
      temp_min,
      normalizedDescription,
    }
  } catch (err) {
    console.log('\nNo se pudo traer la informacion del clima.\n'.red)
  }
}

module.exports = {
  useSearchWeather,
}
