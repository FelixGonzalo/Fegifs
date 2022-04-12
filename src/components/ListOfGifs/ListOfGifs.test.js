import { render, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { ListOfGifs } from './index'

describe('ListOfGifs', () => {
  test('Show a message when the list is empty', () => {
    render(<ListOfGifs gifs={[]} />)
    const message = screen.getByText('No encontramos gifs')
    expect(message).toBeInTheDocument()
  })

  test('Show gifs when the list has correct data', () => {
    const data = [
      {
        id: 1,
        title: 'ejemplo 1',
        url: 'https://media.giphy.com/media/gfO3FcnL8ZK9wVgr6t/giphy.gif'
      }
    ]
    render(<ListOfGifs gifs={data} />)
    const gifs = screen.getByTestId('ListOfGifts-withdata')
    expect(gifs).toBeInTheDocument()
  })
})