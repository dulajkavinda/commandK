import React, { useState, useEffect } from 'react'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'
import { CommandKProps } from './CommandK.types'
import { ButtonSize } from '../Button/Button.types'

const CommandK = (props: CommandKProps) => {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey && event.key === 'k') || (event.ctrlKey && event.key === 'k')) {
        const button = document.getElementById('search-button') as HTMLButtonElement | null
        if (button) {
          const x = window.scrollX
          const y = window.scrollY
          setIsOpen(!isOpen)
          button.focus({
            preventScroll: true,
          })
          window.scrollTo(x, y)
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    if (!isOpen) {
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <Modal
          data={props.data}
          size={props.modalSize}
          isOpen={isOpen}
          username={props.username}
          toggle={() => setIsOpen(false)}
        />
      )}
      <Button
        styles={props.customStyles}
        size={props.buttonSize}
        keyLetter={props.keyLetter}
        onClick={() => setIsOpen(true)}
      />
    </>
  )
}

CommandK.defaultProps = {
  keyLetter: 'K',
  buttonSize: 'medium' as ButtonSize,
  username: 'home',
  customStyles: {},
}

export default CommandK
