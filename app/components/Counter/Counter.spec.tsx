import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import user from '@testing-library/user-event'
import { Provider } from 'react-redux'

jest.mock('../../api/identity-count/route', () => ({
  fetchCount: (amount: number) =>
    new Promise<{ data: number }>((resolve) =>
      setTimeout(() => resolve({ data: amount }), 500)
    ),
}))

import { makeReduxStore } from '../../../lib/redux/store'
import {Counter} from './Counter'

describe('<Counter />', () => {
  it('renders the component', () => {
    const store = makeReduxStore()

    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )

    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('decrements the value', async () => {
    const store = makeReduxStore()

    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )

    await user.click(screen.getByRole('button', { name: /decrement value/i }))

    expect(screen.getByText('-1')).toBeInTheDocument()
  })

  it('increments the value', async () => {
    const store = makeReduxStore()

    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )

    await user.click(screen.getByRole('button', { name: /increment value/i }))

    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('increments by amount', async () => {
    const store = makeReduxStore()

    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )

    await user.type(screen.getByLabelText(/set increment amount/i), '{backspace}5')
    await user.click(screen.getByRole('button', { name: /add amount/i }))

    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('increments async', async () => {
    const store = makeReduxStore()

    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )

    await user.type(screen.getByLabelText(/set increment amount/i), '{backspace}3')
    await user.click(screen.getByRole('button', { name: /add async/i }))

    expect(screen.findByText('3')).resolves.toBeInTheDocument()
  })

  it('increments if amount is odd', async () => {
    const store = makeReduxStore()

    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )

    await user.click(screen.getByRole('button', { name: /add if odd/i }))

    expect(screen.getByText('0')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /increment value/i }))
    await user.type(screen.getByLabelText(/set increment amount/i), '{backspace}8')
    await user.click(screen.getByRole('button', { name: /add if odd/i }))

    expect(screen.findByText('9')).resolves.toBeInTheDocument()
  })
})
