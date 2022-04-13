import { useNavigate } from "react-router-dom"
import './Gif.css'

export function Gif({ id, title, url, isClickable = false }) {

  let navigate = useNavigate();

  const handleClick = (id) => {
    if (isClickable) navigate(`/gif/${id}`)
  }

  if (url === '' || !url) return null
  if (title === '' || !title) title = 'anónimo'

  return (
    <div className="Gif">
      <img 
        className="Gif_img"
        src={url}
        alt={title}
        loading="lazy"
        onClick={() => handleClick(id)}
        style={{cursor: isClickable ? 'pointer' : 'default'}} />
      <p className="Gif_name">{title}</p>
    </div>
  )
}