import { useEffect, useState } from 'react'
import { getGifs } from '../services/giphy/getGifs'

export function useGifs_lastSearch() {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])
  const lastKeyword = localStorage.getItem('lastKeyword') || 'random'
  const lastGifs = JSON.parse(localStorage.getItem('lastGifs')) || []

  useEffect(() => {
    setLoading(true)
    getGifs(lastKeyword)
      .then((gifs) => {
        if (lastGifs.length > 0) {
          setGifs(lastGifs.slice(0, 15))
        } else {
          setGifs(gifs)
          localStorage.setItem('lastKeyword', lastKeyword)
          localStorage.setItem('lastGifs', JSON.stringify(gifs))
        }
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        console.error(err)
      })
  }, [])

  return { gifs, loading, lastKeyword }
}
