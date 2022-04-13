const API_KEY = 'ProU4V6SFfM5VkgQQ9SxC2gqNgSXAqdl'

export function getGifs(keyword = 'random') {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

  return fetch(API_URL)
    .then(res => res.json())
    .then(res => {
      const { data } = res

      if (!Array.isArray(data)) return []

      const gifs = data.map(image => {
        const { id, title, images } = image
        const { url } = images.downsized_medium
        return { id, title, url }
      })
      return gifs
    })
}

export function getGif(id) {
  const API_URL = `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`

  return fetch(API_URL)
    .then(res => res.json())
    .then(res => {
      const { data } = res
      const { id, title, images } = data
      const { url } = images.downsized_medium
      return { id, title, url }
    })
}