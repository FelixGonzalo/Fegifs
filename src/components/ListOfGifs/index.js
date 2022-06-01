import './ListOfGifs.css'
import { Gif } from '../../components/Gif'
import { useGifs } from '../../hooks/useGifs'
import { Loader } from '../../components/Loader'

export function ListOfGifs({ keyword = null, columns = 0 }) {
  const { gifs, loading } = useGifs(keyword)

  if (loading) return <Loader />

  return <ListOfGifsTemplate gifs={gifs} columns={columns} />
}

export function ListOfGifsTemplate({ gifs, columns = 0 }) {
  if (gifs.length === 0)
    return <p className="ListOfGifts_nodata">No encontramos gifs</p>

  return (
    <div
      className="ListOfGifts"
      style={columns === 0 ? null : { columnCount: columns }}
      data-testid="ListOfGifts-withdata"
    >
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} isClickable={true} />
      ))}
    </div>
  )
}
