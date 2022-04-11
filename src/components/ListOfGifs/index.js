import { useState, useEffect } from 'react'
import './ListOfGifs.css'
import { Gif } from '../../components/Gif'
import { getGifs } from '../../services/getGifs'
import { Loader } from '../Loader'

export function ListOfGifs({ keyword }) {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])

  useEffect(function () {
    setLoading(true)
    getGifs(keyword).then(gifs => {
      setGifs(gifs)
      setLoading(false)
    }).catch(err => {
      setLoading(false)
      console.error(err)
    })
  }, [keyword])

  if (keyword === '') {
    return <h2 className='ListOfGifts_nodata'>Ingrese una palabra clave para mostrar gifs</h2>
  }

  if (loading) {
    return <Loader />
  }

  if (gifs.length === 0) {
    return <h2 className='ListOfGifts_nodata'>No encontramos gifs relacionados con {keyword}</h2>
  }

  return (
    <section className='ListOfGifts' data-testid="ListOfGifts-withdata">
      {
        gifs.map(({ id, title, url }) =>
          <Gif
            key={id}
            id={id}
            title={title}
            url={url} />)
      }
    </section>
  )
}