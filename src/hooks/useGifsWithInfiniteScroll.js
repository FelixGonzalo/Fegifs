import { useEffect, useState } from 'react'
import debounce from 'just-debounce-it'
import { getGifsWithPagination } from '../services/giphy/getGifs'

export function useGifsWithInfiniteScroll(keyword, limit) {
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false)
  const [isTheEnd, setIsTheEnd] = useState(false)
  const [gifs, setGifs] = useState([])

  const handleOnScroll = debounce(() => {
    if (isTheEnd) return console.log('es el final')
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 500
    ) {
      setOffset(offset + 25)
    } // at the end of the page - 500px
  }, 1000)

  useEffect(() => {
    getGifs()
    window.addEventListener('scroll', handleOnScroll)
    return () => window.removeEventListener('scroll', handleOnScroll)
  }, [offset])

  const getGifs = () => {
    setLoading(true)
    getGifsWithPagination(keyword, limit, offset)
      .then((data) => {
        setGifs([...gifs, ...data.gifs])
        setIsTheEnd(data.pagination.offset >= data.pagination.total_count)
        setLoading(false)
        localStorage.setItem('lastKeyword', keyword)
        localStorage.setItem(
          'lastGifs',
          JSON.stringify(gifs.length > 0 ? gifs : data.gifs.slice(0, 15))
        )
      })
      .catch((err) => {
        setLoading(false)
        console.error(err)
      })
  }

  return { gifs, loading, isTheEnd, keyword }
}
