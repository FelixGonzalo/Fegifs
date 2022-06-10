import './Home.css'
import { Header } from '../../components/Header/Header'
import { ListOfGifs } from '../../components/ListOfGifs'
import { ListOfKeywords } from '../../components/ListOfKeywords'
import { Footer } from '../../components/Footer'
import { COUNTRIES } from '../../store/countries'
import { SUBJECTS } from '../../store/subjects'
import { FAMOUS_DAYS } from '../../store/famousDays'
import { Link } from 'react-router-dom'
import { useGifs_lastSearch } from '../../hooks/useGifs_lastSearch'

export function Home() {
  const { gifs, loading, lastKeyword } = useGifs_lastSearch()

  return (
    <>
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
            {lastKeyword && (
              <>
                <h2 className="Home_aside_title">
                  <span>Última búsqueda</span>
                  <Link to={`/gifs/${lastKeyword}`} className="global_link">
                    {lastKeyword}
                  </Link>
                </h2>
                <ListOfGifs gifs={gifs} loading={loading} columns={3} />
              </>
            )}
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}
