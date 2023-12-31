export type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonType {
  keyLetter?: string
  size?: ButtonSize
  styles?: React.CSSProperties
  hide?: boolean
  onClick?: () => void
}
