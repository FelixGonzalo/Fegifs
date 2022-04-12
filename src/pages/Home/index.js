import { Logo } from '../../components/Logo'
import { SearchByUrl } from '../../containers/SearchByUrl';

export function Home() {

  return (
    <main className='wrapper'>
      <Logo />
      <SearchByUrl url='/gifs' initialKeyword=''/>
    </main>
  )
}