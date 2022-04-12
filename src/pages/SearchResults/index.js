import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ListOfGifs } from '../../components/ListOfGifs'
import { Logo } from '../../components/Logo'
import { SearchByUrl } from '../../containers/SearchByUrl'


export function SearchResults() {
  let params = useParams()
  let initialKeyword = params.keyword ? params.keyword : 'gato'

  const [keyword, setKeyword] = useState(initialKeyword)

  const handleKeywordOnSubmit = (keyword) => {
    setKeyword(keyword)
  }

  return (
    <main className='wrapper'>
      <Logo />
      <SearchByUrl url='/gifs' initialKeyword={initialKeyword} handleKeywordOnSubmit={handleKeywordOnSubmit} />
      <ListOfGifs keyword={keyword} />
    </main>
  )
}