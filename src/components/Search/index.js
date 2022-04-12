import './Search.css'

export function Search({keyword, onSubmit, handleChange}) {

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit} className="Search">
      <input type="text" value={keyword} onChange={handleChange} className="Search_input"/>
      <button className="Search_btn">Buscar</button>
    </form>
  )
}