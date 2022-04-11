import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { ListOfGifs } from '../components/ListOfGifs'
import { Logo } from '../components/Logo'

export function Home() {
  let params = useParams()
  const [keyword, setKeyword] = useState(params.keyword ? params.keyword : 'gato')

  return (
    <>
      <Logo />
      <ListOfGifs keyword={keyword} />
    </>
  )
}