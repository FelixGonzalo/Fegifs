const API_KEY = 'ProU4V6SFfM5VkgQQ9SxC2gqNgSXAqdl'

export function getGifs(keyword = 'buscar') {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

  return fetch(API_URL)
    .then(res => res.json())
    .then(res => {
      const { data } = res
      const gifs = data.map(image => {
        const {id, title, images} = image
        const {url} = images.downsized_medium
        return {id, title, url}
      })
      return gifs
    })
}