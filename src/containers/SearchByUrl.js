import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Search } from '../components/Search'

export function SearchByUrl({ url = '/gifs', initialKeyword = 'random', handleKeywordOnSubmit = () => { } }) {
  let navigate = useNavigate();

  const [keyword, setKeyword] = useState(initialKeyword)

  const handleChange = e => setKeyword(e.target.value)

  const handleSubmit = () => {
    if (keyword !== '') navigate(`${url}/${keyword}`)
    handleKeywordOnSubmit(keyword)
  };

  return (
    <Search
      keyword={keyword}
      onSubmit={handleSubmit}
      handleChange={handleChange} />
  )
}