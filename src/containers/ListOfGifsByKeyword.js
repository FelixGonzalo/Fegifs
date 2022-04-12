import { useGifs } from '../hooks/useGifs'
import { ListOfGifs } from "../components/ListOfGifs";
import { Loader } from '../components/Loader'

export function ListOfGifsByKeyword({ keyword = null}) {
  const { gifs, loading } = useGifs(keyword)

  if (keyword === '') {
    return <h2 className='ListOfGifts_nodata'>Ingrese una palabra clave para mostrar gifs</h2>
  }

  if (loading) {
    return <Loader />
  }

  return <ListOfGifs gifs={gifs} />
}