import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Logo } from '../../components/Logo'
import { Search } from '../../components/Search'
import { ListOfGifs } from '../../components/ListOfGifs'
import './SearchResults.css'

export function SearchResults() {
  let params = useParams()
  let initialKeyword = params.keyword ? params.keyword : 'gato'

  const [keyword, setKeyword] = useState(initialKeyword)

  const handleKeywordOnSubmit = (keyword) => {
    setKeyword(keyword)
  }

  return (
    <main className="wrapper SearchResults">
      <Logo isClickable={true} />
      <Search
        url="/gifs"
        initialKeyword={initialKeyword}
        handleKeywordOnSubmit={handleKeywordOnSubmit}
      />
      <ListOfGifs keyword={keyword} />
    </main>
  )
}
