import React, { ReactNode, useEffect, useReducer, useRef } from 'react'
import classNames from 'classnames'
import { SearchIcon } from './SearchIcon'
import useKeyPress from '../../hooks/useKeyPress'
import './Modal.css'

export type ModalSize = 'small' | 'medium' | 'large'

interface ModalType {
  children?: ReactNode
  size?: ModalSize
  username?: string
  isOpen: boolean
  toggle: () => void
}
interface State {
  selectedIndex: number
}

type Action = { type: 'arrowUp' } | { type: 'arrowDown' } | { type: 'select'; payload: number }

const list = [
  {
    title: 'Repositories',
    items: [
      {
        icon: '🗂',
        title: 'How to make a good repo',
        url: 'https://google.lk',
      },
      {
        icon: '🚀',
        title: 'This is another one to check',
        url: 'https://google.lk',
      },
    ],
  },
  {
    title: 'Projects',
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
    title: 'Something',
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

const Modal = (props: ModalType) => {
  const modalClass = classNames('modal-box', {
    [`modal-box-${props.size}`]: props.size,
  })

  const inputRef = useRef<HTMLInputElement>(null)

  const arrowUpPressed = useKeyPress('ArrowUp')
  const arrowDownPressed = useKeyPress('ArrowDown')

  const initialState = { selectedIndex: 0 }

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'arrowUp': {
        return {
          selectedIndex: state.selectedIndex,
        }
      }
      case 'arrowDown': {
        const button = document.getElementsByClassName(`modal-box-body-items-${state.selectedIndex}`)[0] as HTMLElement

        if (button) {
          button.focus()
        }

        return {
          selectedIndex: state.selectedIndex !== 7 ? state.selectedIndex + 1 : 0,
        }
      }
      case 'select':
        return { selectedIndex: action.payload }
      default:
        throw new Error()
    }
  }

  const [, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    if (arrowUpPressed) {
      dispatch({ type: 'arrowUp' })
    }
  }, [arrowUpPressed])

  useEffect(() => {
    if (arrowDownPressed) {
      dispatch({ type: 'arrowDown' })
    }
  }, [arrowDownPressed])

  let trackItemindex = -1

  return (
    <>
      {props.isOpen && (
        <div className='modal-overlay' onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} id='modal-box' className={modalClass}>
            <div className='modal-box-header'>
              <div className='modal-box-header-search'>
                <div className='modal-box-header-search-icon'>
                  <SearchIcon />
                  <span className='modal-box-header-search-username'>{props.username}</span>
                </div>
                <input
                  ref={inputRef}
                  className='modal-box-header-search-input'
                  type='text'
                  placeholder='Search or jump to'
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowDown') {
                      console.log('arrow down')
                    }
                  }}
                />
              </div>
            </div>
            <div className='modal-box-body'>
              {list.map((item: any, index) => {
                return (
                  <div key={index} className='modal-box-body-item'>
                    <div className='modal-box-body-item-title'>{item.title}</div>
                    {item.items.map((subItem: any) => {
                      const listItemIndex = trackItemindex++
                      return (
                        <div
                          role='button'
                          tabIndex={0}
                          key={trackItemindex}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              window.open(subItem.url)
                            }
                          }}
                          onClick={() => {
                            window.open(subItem.url)
                          }}
                          className={classNames('modal-box-body-items', {
                            [`modal-box-body-items-${listItemIndex + 1}`]: true,
                          })}
                        >
                          <div className='modal-box-body-items-left'>
                            <div className='modal-box-body-items-icon'>{subItem.icon}</div>
                            <div className='modal-box-body-items-title'>{subItem.title}</div>
                          </div>
                          <span className='modal-box-body-items-goto'>Go to</span>
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

Modal.defaultProps = {
  size: 'medium' as ModalSize,
}

export default Modal
