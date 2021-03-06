import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { SearchResults } from './pages/SearchResults'
import { NotFound } from './pages/NotFound'
import { GifDetail } from './pages/GifDetail.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/gif/:id" element={<GifDetail />} />
        <Route path="/gifs/" element={<Navigate to="/gifs/random" replace />} />
        <Route path="/gifs/:keyword" element={<SearchResults />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
