import './Home.css'
import { Header } from '../../components/Header/Header'
import { ListOfGifs } from '../../components/ListOfGifs'
import { ListOfKeywords } from '../../components/ListOfKeywords'
import { Footer } from '../../components/Footer'
import { COUNTRIES } from '../../store/countries'
import { SUBJECTS } from '../../store/subjects'
import { FAMOUS_DAYS } from '../../store/famousDays'

export function Home() {
  return (
    <main className="wrapper Home">
      <Header />
      <h1>Gifs para todo momento</h1>
      <div className="Home_content">
        <section>
          <ListOfKeywords title="🌎 Gifs de paises" keywords={COUNTRIES} />
          <ListOfKeywords title="🤓 Gifs de estudio" keywords={SUBJECTS} />
          <ListOfKeywords
            title="🎉 Gifs de días especiales"
            keywords={FAMOUS_DAYS}
          />
        </section>
        <aside className="Home_aside">
          <h2>Última búsqueda</h2>
          <ListOfGifs columns={3} />
        </aside>
      </div>
      <Footer />
    </main>
  )
}
