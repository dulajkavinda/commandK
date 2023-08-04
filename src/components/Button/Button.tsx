import React from 'react'
import classNames from 'classnames'
import './Button.css'
import { ButtonSize, ButtonType } from './Button.types'

const Button = (props: ButtonType) => {
  const btnClass = classNames('search-bar', {
    [`search-bar-${props.size}`]: props.size,
    'search-bar-hide': props.hide,
  })

  const iconClass = classNames('search-bar-icon', {
    [`search-bar-icon-${props.size}`]: props.size,
  })

  const keyClass = classNames('search-bar-key', {
    [`search-bar-key-${props.size}`]: props.size,
  })

  const getKeyBasedOnOS = (): string => {
    const isMac: boolean = navigator.platform.toUpperCase().indexOf('MAC') >= 0
    return isMac ? 'Command +' : 'Ctrl +'
  }

  return (
    <>
      <button
        data-testid='search-button'
        id='search-button'
        type='button'
        onClick={() => {
          if (props.onClick) {
            props.onClick()
          }
        }}
        className={btnClass}
        style={props.styles}
      >
        <div className={iconClass}>
          <span>{getKeyBasedOnOS()}</span>
        </div>
        <div className={keyClass}>{props.keyLetter?.toUpperCase()}</div>
      </button>
    </>
  )
}

Button.defaultProps = {
  keyLetter: 'K',
  size: 'medium' as ButtonSize,
  hide: false,
}

export default Button
