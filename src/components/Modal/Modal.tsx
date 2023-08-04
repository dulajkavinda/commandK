import React, { useEffect, useReducer, useRef, useMemo, useState } from 'react'
import classNames from 'classnames'
import { SearchIcon, EnterKeyIcon, DownArrowIcon } from './utils'
import useKeyPress from '../../hooks/useKeyPress'
import { Action, Group, Item, ModalSize, ModalType, State } from './Modal.types'
import './Modal.css'

const Modal = (props: ModalType) => {
  const modalClass = classNames('modal-box', {
    [`modal-box-${props.size}`]: props.size,
  })

  const items = useMemo(() => {
    return props.data && props.data.map((item) => item.items).flat()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [resultCount, setResultCount] = useState<number>(items.length)
  const [list, setList] = useState<Group[] | []>(
    props.data.map((group) => {
      return {
        sectionName: group.sectionName,
        items: props.perSectionLimit
          ? group.items.slice(0, props.perSectionLimit).map((item) => {
              return {
                icon: item.icon,
                title: item.title,
                url: item.url,
              }
            })
          : group.items.map((item) => {
              return {
                icon: item.icon,
                title: item.title,
                url: item.url,
              }
            }),
      }
    }) || [],
  )

  const filteredItemsCount = useMemo(() => {
    return list.map((item) => item.items).flat().length
  }, [list])

  const inputRef = useRef<HTMLInputElement>(null)

  const arrowUpPressed = useKeyPress('ArrowUp')
  const arrowDownPressed = useKeyPress('ArrowDown')

  const initialState = { selectedIndex: 0 }

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'arrowUp': {
        const button = document.getElementsByClassName(
          `modal-box-body-items-${state.selectedIndex - 2}`,
        )[0] as HTMLElement

        if (button) {
          button.focus()
        }

        // focusing on input if up arrow is pressed on first item
        if (state.selectedIndex === 1) {
          if (inputRef.current) {
            inputRef.current.focus()
          }
        }

        return {
          selectedIndex: state.selectedIndex !== 0 ? state.selectedIndex - 1 : 0,
        }
      }
      case 'arrowDown': {
        const button = document.getElementsByClassName(`modal-box-body-items-${state.selectedIndex}`)[0] as HTMLElement

        if (button) {
          button.focus()
        }

        return {
          selectedIndex: state.selectedIndex !== filteredItemsCount - 1 ? state.selectedIndex + 1 : 0,
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
      // avoiding scroll to top when focusing on input
      const x = window.scrollX
      const y = window.scrollY
      inputRef.current.focus({
        preventScroll: true,
      })
      window.scrollTo(x, y)
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

  const filterItems = (list: Group[], title: string): void => {
    const result: Group[] = []

    list.forEach((obj) => {
      const items = obj.items.filter((item) => item.title.toLowerCase().includes(title.toLowerCase()))

      if (items.length > 0) {
        result.push({
          ...obj,
          items,
        })
      }
    })

    const resultsCount = result.reduce((acc: number, curr: Group) => {
      return acc + curr.items.length
    }, 0)

    setResultCount(resultsCount)
    setList(result)
  }

  return (
    <>
      {props.isOpen && (
        <div
          data-testid='modal-overlay'
          className='modal-overlay'
          onClick={() => {
            props.toggle()
            // enable scrolling when modal is closed
            document.body.style.overflow = 'initial'
          }}
        >
          <div data-testid='modal' onClick={(e) => e.stopPropagation()} id='modal-box' className={modalClass}>
            <div className='modal-box-header'>
              <div className='modal-box-header-search'>
                <div className='modal-box-header-search-left'>
                  <div className='modal-box-header-search-icon'>
                    <SearchIcon />
                    <span className='modal-box-header-search-username'>{props.username}</span>
                  </div>
                  <input
                    data-testid='search-input'
                    onChange={(e) => {
                      filterItems(props.data, e.target.value)
                    }}
                    ref={inputRef}
                    className='modal-box-header-search-input'
                    type='text'
                    placeholder='Search or jump to'
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        dispatch({ type: 'arrowDown' })
                      }
                    }}
                  />
                </div>
                <div className='modal-box-header-search-right'>
                  {props.size !== 'small' ? (
                    <div className='modal-box-header-search-right-nav'>
                      <span data-testid='press-text' className='modal-box-header-search-right-text-start'>
                        Press
                      </span>
                      <div className='modal-box-header-search-right-icon'>
                        <DownArrowIcon />
                      </div>
                      <span className='modal-box-header-search-right-text'>to Navigate</span>
                    </div>
                  ) : (
                    <div className='modal-box-header-search-right-icon'>
                      <DownArrowIcon />
                    </div>
                  )}

                  <div data-testid='noresults' className='modal-box-header-search-results'>
                    {resultCount === 1 ? `${resultCount} Result` : `${resultCount} Results`}
                  </div>
                </div>
              </div>
            </div>
            <div className='modal-box-body'>
              {list &&
                list.map((item: Group, index) => {
                  return (
                    <div key={index} className='modal-box-body-item'>
                      <div className='modal-box-body-item-title'>{item.sectionName}</div>
                      {item.items.map((subItem: Item) => {
                        const listItemIndex = trackItemindex++
                        return (
                          <div
                            role='button'
                            tabIndex={0}
                            key={trackItemindex}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                window.location.href = `${subItem.url}`
                              }
                            }}
                            onClick={() => {
                              window.location.href = `${subItem.url}`
                            }}
                            className={classNames('modal-box-body-items', {
                              [`modal-box-body-items-${listItemIndex + 1}`]: true,
                            })}
                            data-testid='modal-box-body-item'
                          >
                            <div className='modal-box-body-items-left'>
                              <div data-testid='modal-box-body-items-icon' className='modal-box-body-items-icon'>
                                {subItem.icon}
                              </div>
                              <div className='modal-box-body-items-title'>
                                {subItem.title.length > 48 ? `${subItem.title.substring(0, 45)}...` : subItem.title}
                              </div>
                            </div>
                            <div className='modal-box-body-items-goto'>
                              <span className='modal-box-body-items-goto-text-start'>Press</span>
                              <div className='modal-box-body-items-goto-icon'>
                                <EnterKeyIcon />
                              </div>
                              <span className='modal-box-body-items-goto-text'>to Jump</span>
                            </div>
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
  data: [],
  isOpen: false,
  toggle: () => {},
  username: 'home',
}

export default Modal
