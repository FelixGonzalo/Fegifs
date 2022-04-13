import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Gif } from './index'

describe('Gif', () => {
  test('When the title is empty a message is displayed', () => {
    render(
      <BrowserRouter>
        <Gif id={1} title={''} url={'https://media.giphy.com/media/gfO3FcnL8ZK9wVgr6t/giphy.gif'} />
      </BrowserRouter>
    )
    const gif = screen.getByText('anónimo')
    expect(gif).toBeInTheDocument()
  })

  test('When the title is undefined a message is displayed', () => {
    render(
      <BrowserRouter>
        <Gif id={1} title={undefined} url={'https://media.giphy.com/media/gfO3FcnL8ZK9wVgr6t/giphy.gif'} />
      </BrowserRouter>
    )
    const gif = screen.getByText('anónimo')
    expect(gif).toBeInTheDocument()
  })

  test('When the title is null a message is displayed', () => {
    render(
      <BrowserRouter>
        <Gif id={1} title={null} url={'https://media.giphy.com/media/gfO3FcnL8ZK9wVgr6t/giphy.gif'} />
      </BrowserRouter>
    )
    const gif = screen.getByText('anónimo')
    expect(gif).toBeInTheDocument()
  })

  test('When the url is empty nothing is rendered', async () => {
    const { container } = render(
      <BrowserRouter>
        <Gif id={1} title={'prueba'} url={''} />
      </BrowserRouter>
    )
    expect(container.innerHTML).toBe('');
  })

  test('When the url is undefined nothing is rendered', async () => {
    const { container } = render(
      <BrowserRouter>
        <Gif id={1} title={'prueba'} url={undefined} />
      </BrowserRouter>
    )
    expect(container.innerHTML).toBe('');
  })

  test('When the url is null nothing is rendered', async () => {
    const { container } = render(
      <BrowserRouter>
        <Gif id={1} title={'prueba'} url={null} />
      </BrowserRouter>
    )
    expect(container.innerHTML).toBe('');
  })

  test('Cursor pointer should be displayed when isClickable is true', () => {
    render(
      <BrowserRouter>
        <Gif id={1} title={'prueba'} url={'https://media.giphy.com/media/gfO3FcnL8ZK9wVgr6t/giphy.gif'} isClickable={true} />
      </BrowserRouter>
    )
    const gif = screen.getByTestId('Gif_img')
    fireEvent.click(gif)
    expect(gif).toHaveStyle('cursor: pointer')
  })

})