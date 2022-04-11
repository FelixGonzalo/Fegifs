import './Gif.css'

export function Gif({ id, title, url }) {

  if (url === '' || !url) return null
  if (title === '' || !title) title = 'anónimo'

  return (
    <div className="Gif">
      <img className="Gif_img" src={url} alt={title} />
      <p className="Gif_name">{title}</p>
    </div>
  )
}