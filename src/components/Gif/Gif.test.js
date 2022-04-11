import { render, screen } from '@testing-library/react'
import {Gif} from './index'

describe('Gif', () => {
  test('When the title is empty a message is displayed', () => {
    render(<Gif id={1} title={''} url={'https://media.giphy.com/media/gfO3FcnL8ZK9wVgr6t/giphy.gif'} />)
    const gif = screen.getByText('anónimo')
    expect(gif).toBeInTheDocument()
  })

  test('When the title is undefined a message is displayed', () => {
    render(<Gif id={1} title={undefined} url={'https://media.giphy.com/media/gfO3FcnL8ZK9wVgr6t/giphy.gif'} />)
    const gif = screen.getByText('anónimo')
    expect(gif).toBeInTheDocument()
  })

  test('When the title is null a message is displayed', () => {
    render(<Gif id={1} title={null} url={'https://media.giphy.com/media/gfO3FcnL8ZK9wVgr6t/giphy.gif'} />)
    const gif = screen.getByText('anónimo')
    expect(gif).toBeInTheDocument()
  })

  test('When the url is empty nothing is rendered', async () => {
    const {container} = render(<Gif id={1} title={'prueba'} url={''} />)
    expect(container.innerHTML).toBe('');
  })
  test('When the url is undefined nothing is rendered', async () => {
    const {container} = render(<Gif id={1} title={'prueba'} url={undefined} />)
    expect(container.innerHTML).toBe('');
  })
  test('When the url is null nothing is rendered', async () => {
    const {container} = render(<Gif id={1} title={'prueba'} url={null} />)
    expect(container.innerHTML).toBe('');
  })
})