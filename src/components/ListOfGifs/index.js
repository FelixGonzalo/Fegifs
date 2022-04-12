import './ListOfGifs.css'
import { Gif } from '../../components/Gif'

export function ListOfGifs({ gifs }) {

  if (gifs.length === 0) {
    return <h2 className='ListOfGifts_nodata'>No encontramos gifs</h2>
  }

  return (
    <div className='ListOfGifts' data-testid="ListOfGifts-withdata">
      {
        gifs.map(({ id, title, url }) =>
          <Gif
            key={id}
            id={id}
            title={title}
            url={url} />)
      }
    </div>
  )
}