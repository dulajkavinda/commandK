import React from 'react'

interface EnterKeyIconAttributes {
  size?: number
}

const EnterKeyIcon: React.FC<EnterKeyIconAttributes> = ({ size = 18 }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M13 1H2C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1Z'
        stroke='#707680'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M6 11L4 9L6 7' stroke='#707680' strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M4 9H9C9.26522 9 9.51957 8.89464 9.70711 8.70711C9.89464 8.51957 10 8.26522 10 8V5'
        stroke='#707680'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default EnterKeyIcon
