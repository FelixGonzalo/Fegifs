import './Home.css'
import { Header } from '../../components/Header/Header'
import { ListOfGifs } from '../../components/ListOfGifs'
import { ListOfKeywords } from '../../components/ListOfKeywords'
import { COUNTRIES } from '../../store/countries'
import { SUBJECTS } from '../../store/subjects'

export function Home() {
  return (
    <main className="wrapper Home">
      <Header />
      <h1>Gifs para todo momento</h1>
      <div className="Home_content">
        <section>
          <ListOfKeywords title="Gifs de paises" keywords={COUNTRIES} />
          <ListOfKeywords title="Gifs de estudio" keywords={SUBJECTS} />
        </section>
        <aside className="Home_aside">
          <h2>Última búsqueda</h2>
          <ListOfGifs />
        </aside>
      </div>
    </main>
  )
}
