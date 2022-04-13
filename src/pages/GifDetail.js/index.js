import { useParams } from 'react-router-dom'
import { Gif } from '../../components/Gif'
import { useGif } from '../../hooks/useGif'
import { Logo } from '../../components/Logo'
import { Loader } from '../../components/Loader'
import './GifDetail.css'

export function GifDetail() {
  let params = useParams()
  let id = params.id || 'EatwJZRUIv41G'
  const { gif, loading } = useGif(id)

  return (
    <main className='wrapper GifDetail'>
      <Logo isClickable={true} />
      <div className="GifDetail_gif">
        {
          loading
            ? <Loader />
            : <Gif id={gif.id} title={gif.title} url={gif.url} />
        }
      </div>
    </main>
  )
}