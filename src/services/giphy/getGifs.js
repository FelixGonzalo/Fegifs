import { config } from '../../config'
const API_KEY = config.giphy.API_KEY
const API_URL = config.giphy.API_URL

export function getGifs(keyword = 'random') {
  const url = `${API_URL}/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const { data } = res

      if (!Array.isArray(data)) return []

      const gifs = data.map((image) => {
        const { id, title, images } = image
        const { url } = images.downsized_medium
        return { id, title, url }
      })
      return gifs
    })
}

export function getGif(id) {
  const url = `${API_URL}/${id}?api_key=${API_KEY}`
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const { data } = res
      const { id, title, images } = data
      const { url } = images.downsized_medium
      return { id, title, url }
    })
}
