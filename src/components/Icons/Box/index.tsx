import React, {
  CSSProperties,
  useMemo
} from 'react'

import styles from './index.module.scss'
import { colorEnum } from "@/enums/colorEnum.ts"

interface IIconBoxProps {
  color?: colorEnum
  background?: colorEnum
  rounded?: boolean
  size?: 'small' | 'medium' | 'big' | 'large'
  children?: React.ReactNode
  cursor?: 'pointer' | 'auto' | 'default',
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const IconBox: React.FC<IIconBoxProps> = ({
  color = colorEnum.PRIMARY,
  background = colorEnum.LIGHT_BLUE,
  rounded = true,
  size = 'big',
  cursor = 'pointer',
  onClick,
  children,
}) => {
  const boxSize = useMemo(() => {
    return {
      small: '24px',
      medium: '32px',
      big: '56px',
      large: '64px',
    }[size]
  }, [size]);

  const style: CSSProperties = {
    '--color': `var(${ color })`,
    '--background-color': `var(${ background })`,
    '--size': boxSize,
    '--radius': rounded ? '50%' : '12px',
    '--cursor': cursor
  } as CSSProperties;

  return (
    <div
      className={ styles.IconBox }
      style={ style }
      onClick={ onClick }
    >
      { children }
    </div>
  )
}

export default IconBox
