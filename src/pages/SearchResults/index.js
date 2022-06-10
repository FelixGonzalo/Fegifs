import { useParams } from 'react-router-dom'
import { Logo } from '../../components/Logo'
import { Search } from '../../components/Search'
import { ListOfGifs } from '../../components/ListOfGifs'
import './SearchResults.css'
import { useGifsWithInfiniteScroll } from '../../hooks/useGifsWithInfiniteScroll'
import { Footer } from '../../components/Footer'

export function SearchResults() {
  let params = useParams()
  let initialKeyword = params.keyword ? params.keyword : 'gato'

  const { gifs, loading, isTheEnd } = useGifsWithInfiniteScroll(
    initialKeyword,
    25
  )

  const handleKeywordOnSubmit = (keyword) => window.location.reload()

  return (
    <>
      <main className="wrapper SearchResults">
        <div className="SearchResults_header">
          <Logo isClickable={true} />
          <Search
            url="/gifs"
            initialKeyword={initialKeyword}
            handleKeywordOnSubmit={handleKeywordOnSubmit}
          />
        </div>
        <ListOfGifs gifs={gifs} loading={loading} />
        {isTheEnd && (
          <p className="SearchResults_noMoreData">
            No hay más gifs sobre <span>{initialKeyword}</span>
          </p>
        )}
      </main>
      {isTheEnd && <Footer />}
    </>
  )
}
