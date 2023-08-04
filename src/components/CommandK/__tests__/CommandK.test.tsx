import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer'
import CommandK from '../CommandK'
import { Group } from '../../Modal/Modal.types'

const list: Group[] = [
  {
    sectionName: 'Repositories',
    items: [
      {
        icon: '🗂',
        title: 'How to make a good repo',
        url: '/repo',
      },
      {
        icon: '🚀',
        title: 'This is another one to check',
        url: 'https://google.lk',
      },
    ],
  },
  {
    sectionName: 'Projects',
    items: [
      {
        icon: '🏋️‍♀️',
        title: 'How to make a good repo',
      },
      {
        icon: '📸',
        title: 'This is another one to check',
      },
    ],
  },
  {
    sectionName: 'Something',
    items: [
      {
        icon: '🏋️‍♀️',
        title: 'How to make a good repo',
        url: 'https://google.lk',
      },
      {
        icon: '📸',
        title: 'This is another one to check',
        url: 'https://google.lk',
      },
      {
        icon: '🏋️‍♀️',
        title: 'How to make a good repo',
        url: 'https://google.lk',
      },
      {
        icon: '📸',
        title: 'This is another one to check',
        url: 'https://google.lk',
      },
    ],
  },
]

describe('components/CommandK', () => {
  it('renders commandK', () => {
    const modal = renderer.create(<CommandK data={list} />).toJSON()
    expect(modal).toMatchSnapshot()
  })

  it('renders with a button', () => {
    render(<CommandK data={list} />)
    const btn = screen.getByTestId('search-button')

    expect(btn).toHaveClass('search-bar')
    expect(btn).toHaveTextContent('K')
  })

  it('renders with a given key', () => {
    render(<CommandK data={list} keyLetter='N' />)
    const btn = screen.getByTestId('search-button')

    expect(btn).toHaveClass('search-bar')
    expect(btn).toHaveTextContent('N')
  })

  it('renders with a given size', () => {
    render(<CommandK data={list} buttonSize='small' modalSize='small' />)
    const btn = screen.getByTestId('search-button')

    expect(btn).toHaveClass('search-bar-small')
  })

  it('open modal when the button is pressed', () => {
    render(<CommandK data={list} />)
    const btn = screen.getByTestId('search-button')

    fireEvent.click(btn)

    const modal = screen.getByTestId('modal')
    expect(modal).toBeInTheDocument()
  })

  it('modal search input should be focused when K and Command is pressed', () => {
    render(<CommandK data={list} />)

    const container = screen.getByTestId('commandk')

    fireEvent.keyDown(container, {
      key: 'k',
      code: 'KeyK',
      ctrlKey: true,
    })

    const btn = screen.getByTestId('search-input')
    expect(btn).toHaveFocus()
  })

  it('hide the button if the hideButton is true', () => {
    render(<CommandK data={list} />)
    const btn = screen.getByTestId('search-button')

    expect(btn).not.toHaveClass('search-bar-hide')
  })
})
