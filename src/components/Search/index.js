import './Search.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Search({
  url = '/gifs',
  initialKeyword = '',
  handleKeywordOnSubmit = () => {},
}) {
  let navigate = useNavigate()

  const [keyword, setKeyword] = useState(initialKeyword)

  const handleChange = (e) => setKeyword(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (keyword !== '') navigate(`${url}/${keyword}`)
    handleKeywordOnSubmit(keyword)
  }

  return (
    <SearchTemplate
      handleSubmit={handleSubmit}
      keyword={keyword}
      handleChange={handleChange}
    />
  )
}

function SearchTemplate({ handleSubmit, keyword, handleChange }) {
  return (
    <form onSubmit={handleSubmit} className="Search">
      <input
        type="text"
        value={keyword}
        onChange={handleChange}
        className="Search_input"
      />
      <button className="Search_btn">Buscar</button>
    </form>
  )
}
