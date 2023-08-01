import React, { ReactNode, useEffect } from 'react'
import './Modal.css'

interface ModalType {
  children?: ReactNode
  isOpen: boolean
  toggle: () => void
}

export default function Modal(props: ModalType) {
  useEffect(() => {
    const modalContent = document.getElementById('modal-box')

    if (!modalContent) return
    modalContent.classList.add('fade-out')
  }, [])

  return (
    <>
      {props.isOpen && (
        <div className='modal-overlay' onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} id='modal-box' className='modal-box'>
            {props.children}
          </div>
        </div>
      )}
    </>
  )
}
