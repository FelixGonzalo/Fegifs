import './Home.css'
import { Logo } from '../../components/Logo'
import { SearchByUrl } from '../../containers/SearchByUrl';
import { ListOfGifsByKeyword } from '../../containers/ListOfGifsByKeyword';

export function Home() {

  return (
    <main className='wrapper Home'>
      <Logo />
      <h1>Gifs para todo momento</h1>
      <SearchByUrl url='/gifs' initialKeyword='' />
      <section className='Home_lastSearch'>
        <h2>Última busqueda</h2>
        <ListOfGifsByKeyword />
      </section>
    </main>
  )
}