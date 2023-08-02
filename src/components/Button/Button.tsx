import React from 'react'
import classNames from 'classnames'
import './Button.css'
import { ButtonSize, ButtonType } from './Button.types'

const Button = (props: ButtonType) => {
  const btnClass = classNames('search-bar', {
    [`search-bar-${props.size}`]: props.size,
  })

  const iconClass = classNames('search-bar-icon', {
    [`search-bar-icon-${props.size}`]: props.size,
  })

  const keyClass = classNames('search-bar-key', {
    [`search-bar-key-${props.size}`]: props.size,
  })

  return (
    <>
      <button
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
          <span>Command +</span>
        </div>
        <div className={keyClass}>{props.keyLetter?.toUpperCase()}</div>
      </button>
    </>
  )
}

Button.defaultProps = {
  keyLetter: 'K',
  size: 'medium' as ButtonSize,
}

export default Button
