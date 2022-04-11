import { render, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { ListOfGifs } from './index'

describe('ListOfGifs', () => {
  test('When the keyword is empty a message is displayed', () => {
    render(<ListOfGifs keyword={''}/>)
    const list = screen.getByText('Ingrese una palabra clave para mostrar gifs')
    expect(list).toBeInTheDocument()
  })
  
  test('When the keyword is known the List of Gifs is displayed', async () => {
    render(<ListOfGifs keyword={'panda'}/>)
    await waitFor(() => { expect(screen.getByTestId('ListOfGifts-withdata')).toBeInTheDocument()}, {timeout: 3 * 1000})
  })
  
  test('When the keyword is unknown a message is displayed', async () => {
    const fakeGifs = {};
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({fakeGifs})
      })
    );
    const keyword = 'kjsdkfhsgjy'
    await act(async () => render(<ListOfGifs keyword={keyword}/>))
    const list = screen.getByText(`No encontramos gifs relacionados con ${keyword}`)
    expect(list).toBeInTheDocument()
  })
})