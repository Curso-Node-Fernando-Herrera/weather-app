const axios = require('axios').default
require('dotenv').config()

const { searchPlace } = require('../inquirers/searchPlace')
const { selectPlaceToShow } = require('../inquirers/selectPlaceToShow')

const useSearchPlace = async () => {
  const place = await searchPlace()

  try {
    const axiosPlace = axios.create({
      baseURL: `${process.env.MAPBOX_BASE_URL}/${encodeURI(place)}.json`,
      params: {
        access_token: process.env.MAPBOX_KEY,
        limit: 5,
        language: 'es',
      },
    })

    const { data } = await axiosPlace.get()
    const places = normalizedData(data)
    await selectPlaceToShow(places)
  } catch (err) {
    console.log('No se han encontrado resultados de esa busqueda')
    return []
  }
}

const normalizedData = (data) => {
  const { features } = data

  return features.map(({ place_name_es, id, center }) => ({
    id,
    name: place_name_es,
    lng: center[0],
    lat: center[1],
  }))
}

module.exports = {
  useSearchPlace,
}
