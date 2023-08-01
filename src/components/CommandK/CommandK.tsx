import React, { useState, useEffect } from 'react'
import Modal, { ModalSize } from '../Modal/Modal'
import Button, { ButtonSize } from '../Button/Button'

export interface CommandKProps {
  keyLetter?: string
  buttonSize?: ButtonSize
  modalSize?: ModalSize
  username?: string
}

const CommandK = (props: CommandKProps) => {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey && event.key === 'k') || (event.ctrlKey && event.key === 'k')) {
        const button = document.getElementById('search-button') as HTMLButtonElement | null
        if (button) {
          button.focus()
          setIsOpen(!isOpen)
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
        <Modal size={props.modalSize} isOpen={isOpen} username={props.username} toggle={() => setIsOpen(false)} />
      )}
      <Button size={props.buttonSize} keyLetter={props.keyLetter} onClick={() => setIsOpen(true)} />
    </>
  )
}

CommandK.defaultProps = {
  keyLetter: 'K',
  buttonSize: 'medium' as ButtonSize,
  username: 'home',
}

export default CommandK
