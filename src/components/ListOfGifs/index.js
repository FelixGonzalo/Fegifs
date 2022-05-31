import './ListOfGifs.css'
import { Gif } from '../../components/Gif'
import { useGifs } from '../../hooks/useGifs'
import { Loader } from '../../components/Loader'

export function ListOfGifs({ keyword = null }) {
  const { gifs, loading } = useGifs(keyword)

  if (loading) return <Loader />

  return <ListOfGifsTemplate gifs={gifs} />
}

export function ListOfGifsTemplate({ gifs }) {
  if (gifs.length === 0)
    return <p className="ListOfGifts_nodata">No encontramos gifs</p>

  return (
    <div className="ListOfGifts" data-testid="ListOfGifts-withdata">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} isClickable={true} />
      ))}
    </div>
  )
}
