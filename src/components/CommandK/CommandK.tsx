import React, { useState, useEffect } from 'react'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'

interface ButtonType {
  key?: string
  size?: string
}

const CommandK = (props: ButtonType) => {
  const [isOpen, setIsOpen] = useState(false)

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
      <Modal isOpen={isOpen} toggle={() => setIsOpen(false)}>
        .
      </Modal>
      <Button size={props.size} onClick={() => setIsOpen(true)} />
    </>
  )
}

CommandK.defaultProps = {
  key: 'K',
  size: 'medium',
}

export default CommandK
