import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Modal from '../Modal'
import { Group } from '../Modal.types'

const list: Group[] = [
  {
    sectionName: 'Repositories',
    items: [
      {
        icon: '🗂',
        title: 'How to make a good repo random',
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

describe('components/Modal', () => {
  it('renders modal', () => {
    const modal = renderer.create(<Modal data={list} isOpen toggle={() => null} />).toJSON()
    expect(modal).toMatchSnapshot()
  })

  it('renders modal with given data', () => {
    render(<Modal data={list} isOpen toggle={() => null} />)
    const modal = screen.getByTestId('modal')

    expect(modal).toHaveTextContent('Repositories')
    expect(modal).toHaveTextContent('Projects')
    expect(modal).toHaveTextContent('Something')

    expect(modal).toHaveTextContent('How to make a good repo')
    expect(modal).toHaveTextContent('This is another one to check')

    expect(modal).toHaveTextContent('🗂')
    expect(modal).toHaveTextContent('🚀')
    expect(modal).toHaveTextContent('🏋️‍♀️')
    expect(modal).toHaveTextContent('📸')
  })

  it('by default button should be rendered with medium size', () => {
    render(<Modal data={list} isOpen toggle={() => null} />)
    const modal = screen.getByTestId('modal')

    expect(modal).toHaveClass('modal-box-medium')
  })

  it('modal should be rendered with a given size', () => {
    render(<Modal size='small' data={list} isOpen toggle={() => null} />)
    const modal = screen.getByTestId('modal')

    expect(modal).toHaveClass('modal-box-small')
  })

  it('by default button should be rendered with username gome', () => {
    render(<Modal data={list} isOpen toggle={() => null} />)
    const modal = screen.getByTestId('modal')

    expect(modal).toHaveTextContent('home')
  })

  it('modal should be rendered with a given username', () => {
    render(<Modal username='adam' data={list} isOpen toggle={() => null} />)
    const modal = screen.getByTestId('modal')

    expect(modal).toHaveTextContent('adam')
  })

  it('modal should be closed when overlay is clicked', () => {
    const onClick = jest.fn()
    render(<Modal username='adam' data={list} isOpen toggle={onClick} />)
    const modalOverlay = screen.getByTestId('modal-overlay')

    modalOverlay.click()
    expect(onClick).toHaveBeenCalled()
  })

  it('show Press text in modal if it is not small', () => {
    render(<Modal size='medium' data={list} isOpen toggle={() => null} />)
    const modal = screen.getByTestId('press-text')

    expect(modal).toHaveTextContent('Press')
  })

  it('hide Press text in modal if it is small', () => {
    render(<Modal size='small' data={list} isOpen toggle={() => null} />)

    expect(screen.queryByTestId('press-text')).not.toBeInTheDocument()
  })

  it('focus on the 1st item when the down arrow pressed', () => {
    render(<Modal size='small' data={list} isOpen toggle={() => null} />)

    const input = screen.getByTestId('search-input')

    input.focus()
    fireEvent.keyDown(input, { key: 'ArrowDown', code: 'ArrowDown' })

    expect(screen.getByTestId('modal')).toHaveTextContent('How to make a good repo')
  })

  it('filter list based on search terms', () => {
    render(<Modal size='small' data={list} isOpen toggle={() => null} />)

    const input = screen.getByTestId('search-input')

    input.focus()
    fireEvent.change(input, { target: { value: 'random' } })
    input.blur()

    expect(screen.getByTestId('modal')).toHaveTextContent('Repositories')
    expect(screen.queryByText('Projects')).not.toBeInTheDocument()
    expect(screen.queryByText('Something')).not.toBeInTheDocument()
  })
})
