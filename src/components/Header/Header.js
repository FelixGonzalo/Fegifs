import { Logo } from '../Logo'
import { Search } from '../Search'
import './Header.css'

export function Header() {
  return (
    <header className="Header">
      <Logo />
      <Search url="/gifs" />
    </header>
  )
}
