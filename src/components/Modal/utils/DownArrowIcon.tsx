import React from 'react'

interface DownArrowIconAttributes {
  size?: number
}

const DownArrowIcon: React.FC<DownArrowIconAttributes> = ({ size = 18 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 14 14'>
      <g transform='rotate(180 7 7)'>
        <g fill='none' stroke='#707680' strokeLinecap='round' strokeLinejoin='round'>
          <rect width='13' height='13' x='.5' y='.5' rx='1' />
          <path d='M8.5 10.5v-3h2L7 3.5l-3.5 4h2v3h3z' />
        </g>
      </g>
    </svg>
  )
}

export default DownArrowIcon
