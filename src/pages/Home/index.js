import './Home.css'
import { Header } from '../../components/Header/Header'
import { ListOfGifs } from '../../components/ListOfGifs'

export function Home() {
  return (
    <main className="wrapper Home">
      <Header />
      <h1>Gifs para todo momento</h1>
      <section className="Home_lastSearch">
        <h2>Última búsqueda</h2>
        <ListOfGifs />
      </section>
    </main>
  )
}
