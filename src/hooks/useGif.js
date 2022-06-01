import { useEffect, useState } from 'react'
import { getGif } from '../services/giphy/getGifs'

export function useGif(id) {
  const [gif, setGif] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getGif(id)
      .then((gif) => {
        setGif(gif)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        console.error(err)
      })
  }, [])

  return { gif, loading }
}
