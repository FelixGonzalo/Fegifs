import { Link } from 'react-router-dom'
import './NotFound.css'

export function NotFound() {

  return (
    <main className='wrapper NotFound'>
      <img src="https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif" alt="Page not found" loading="lazy" className='NotFound_img'/>
      <Link to={'/'} className="NotFound_link">Ir a la página principal</Link>
    </main>
  )
}