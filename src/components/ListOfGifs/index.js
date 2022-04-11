import { useState, useEffect } from 'react'
import './ListOfGifs.css'
import { Gif } from '../../components/Gif'
import { getGifs } from '../../services/getGifs'

export function ListOfGifs({ keyword }) {

  const [gifs, setGifs] = useState([])

  useEffect(function () {
    getGifs(keyword).then(gifs => setGifs(gifs))
  }, [keyword])

  return (
    <section className='ListOfGifts'>
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