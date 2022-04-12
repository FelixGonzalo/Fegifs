import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { SearchResults } from './pages/SearchResults'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/gifs/:keyword" element={<SearchResults />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
