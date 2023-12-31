import { ReactNode } from 'react'

export type ModalSize = 'small' | 'medium' | 'large'

export interface ModalType {
  children?: ReactNode
  size?: ModalSize
  username?: string
  isOpen: boolean
  data: Group[]
  perSectionLimit?: number | undefined
  toggle: () => void
}
export interface State {
  selectedIndex: number
}

export type Action = { type: 'arrowUp' } | { type: 'arrowDown' } | { type: 'select'; payload: number }

export interface Item {
  icon: string | ReactNode
  title: string
  url?: string
}

export interface Group {
  sectionName: string
  items: Item[]
}
