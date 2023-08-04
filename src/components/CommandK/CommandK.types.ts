import { ButtonSize } from '../Button/Button.types'
import { Group, ModalSize } from '../Modal/Modal.types'

export interface CommandKProps {
  keyLetter?: string
  buttonSize?: ButtonSize
  modalSize?: ModalSize
  data: Group[]
  username?: string
  perSectionLimit?: number
  hideButton?: boolean
  customStyles?: React.CSSProperties
}
