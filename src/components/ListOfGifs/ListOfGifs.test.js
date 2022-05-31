import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ListOfGifsTemplate } from './index'

describe('ListOfGifs', () => {
  test('Show a message when the list is empty', () => {
    render(<ListOfGifsTemplate gifs={[]} />)
    const message = screen.getByText('No encontramos gifs')
    expect(message).toBeInTheDocument()
  })

  test('Show gifs when the list has correct data', () => {
    const data = [
      {
        id: 1,
        title: 'ejemplo 1',
        url: 'https://media.giphy.com/media/gfO3FcnL8ZK9wVgr6t/giphy.gif',
      },
    ]
    render(
      <BrowserRouter>
        <ListOfGifsTemplate gifs={data} />
      </BrowserRouter>
    )
    const gifs = screen.getByTestId('ListOfGifts-withdata')
    expect(gifs).toBeInTheDocument()
  })
})
