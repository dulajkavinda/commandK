import React from 'react'
import './Button.css'

interface ButtonType {
  key?: string
  size?: string
  onClick?: () => void
}

const Button = (props: ButtonType) => {
  return (
    <>
      <button
        id='search-button'
        type='button'
        onClick={() => {
          if (props.onClick) {
            console.log('props.onClick')
            props.onClick()
          }
        }}
        className='search-bar'
      >
        <div className='search-bar-icon'>
          <span>Command +</span>
        </div>
        <div className='search-bar-key'>{props.key}</div>
      </button>
    </>
  )
}

Button.defaultProps = {
  key: 'K',
  size: 'medium',
}

export default Button
