import { Link } from 'react-router-dom'
import './ListOfKeywords.css'

export function ListOfKeywords({ title, keywords }) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="ListOfKeywords_links">
        {keywords.map((item) => (
          <Link
            key={item.slug}
            to={`/gifs/${item.slug}`}
            className="ListOfKeywords_link"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
