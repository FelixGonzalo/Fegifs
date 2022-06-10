import './ListOfGifs.css'
import { Gif } from '../../components/Gif'
import { Loader } from '../../components/Loader'

export function ListOfGifs({ gifs, loading = false, FixedColumns = 0 }) {
  if (gifs.length === 0)
    return <p className="ListOfGifts_nodata">No encontramos gifs</p>

  return (
    <>
      <div
        className="ListOfGifts"
        style={FixedColumns === 0 ? null : { columnCount: FixedColumns }}
        data-testid="ListOfGifts-withdata"
      >
        {gifs.map(({ id, title, url }, index) => (
          <Gif
            key={id + index}
            id={id}
            title={title}
            url={url}
            isClickable={true}
          />
        ))}
      </div>
      {loading && <Loader />}
    </>
  )
}
