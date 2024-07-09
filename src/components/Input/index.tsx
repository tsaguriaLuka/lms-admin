import React, {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  CSSProperties,
} from "react"

import styles from './index.module.scss'
import classNames from "classnames/bind";

interface InputProps {
  type?: 'text' | 'email' | 'password'
  value?: string | number
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  maxLength?: number
  minLength?: number
  size?: number
  autoFocus?: boolean
  name?: string
  id?: string
  className?: string
  style?: CSSProperties
  onInput?: (event: ChangeEvent<HTMLInputElement>) => void
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({
 type = 'text',
 value,
 placeholder,
 disabled,
 readOnly,
 maxLength,
 minLength,
 size,
 autoFocus,
 name,
 id,
 className,
 style,
 onInput,
 onChange,
 onFocus,
 onBlur,
 onKeyDown,
 onKeyUp,
}) => {
  return (
    <input
      type={ type }
      value={ value }
      placeholder={ placeholder }
      disabled={ disabled }
      readOnly={ readOnly }
      maxLength={ maxLength }
      minLength={ minLength }
      size={ size }
      autoFocus={ autoFocus }
      name={ name }
      id={ id }
      className={
        classNames(className, styles.Input)
      }
      style={ style }
      onInput={ onInput }
      onChange={ onChange }
      onFocus={ onFocus }
      onBlur={ onBlur }
      onKeyDown={ onKeyDown }
      onKeyUp={ onKeyUp }
    />
  )
}

export default Input
