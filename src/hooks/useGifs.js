import { useEffect, useState } from "react"
import { getGifs } from "../services/getGifs"

export function useGifs(keyword = null) {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])

  useEffect(function () {
    setLoading(true)
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
    getGifs(keywordToUse).then(gifs => {
      setGifs(gifs)
      setLoading(false)
      localStorage.setItem('lastKeyword', keywordToUse)
    }).catch(err => {
      setLoading(false)
      console.error(err)
    })
  }, [keyword])

  return { gifs, loading }
}