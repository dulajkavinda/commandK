import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Button from '../Button'

describe('components/Button', () => {
  it('should render a button', () => {
    const button = renderer.create(<Button />).toJSON()
    expect(button).toMatchSnapshot()
  })

  it('button should be rendered with a default key as K', () => {
    render(<Button keyLetter='K' />)
    const primaryButton = screen.getByRole('button')

    expect(primaryButton).toHaveClass('search-bar')
    expect(primaryButton).toHaveTextContent('K')
  })

  it('button should be rendered with a given text', () => {
    render(<Button keyLetter='N' />)
    const primaryButton = screen.getByRole('button')

    expect(primaryButton).toHaveClass('search-bar')
    expect(primaryButton).toHaveTextContent('N')
  })

  it('by default button should be rendered with medium size', () => {
    render(<Button />)
    const primaryButton = screen.getByRole('button')

    expect(primaryButton).toHaveClass('search-bar-medium')
  })

  it('button should be rendered with a given size', () => {
    render(<Button size='small' />)
    const primaryButton = screen.getByRole('button')

    expect(primaryButton).toHaveClass('search-bar-small')
  })

  it('button should be clickable', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick} />)
    const primaryButton = screen.getByRole('button')

    primaryButton.click()
    expect(onClick).toHaveBeenCalled()
  })

  it('button should show given custom styles', () => {
    render(<Button styles={{ backgroundColor: 'red' }} />)
    const primaryButton = screen.getByRole('button')

    expect(primaryButton).toHaveStyle('background-color: red')
  })
})
