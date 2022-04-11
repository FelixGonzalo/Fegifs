import { useState } from 'react'
import './App.css'
import { ListOfGifs } from './components/ListOfGifs'

function App() {
  const [keyword, setKeyword] = useState('gato')

  return (
    <div className="App">
      <section className="App-content">
        Fegifs
        <ListOfGifs keyword={keyword}/>
      </section>
    </div>
  )
}

export default App
