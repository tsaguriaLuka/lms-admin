import React, {
  CSSProperties,
  ReactNode
} from "react"

import { colorEnum } from "@/enums/colorEnum.ts"

interface IconProps {
  color?: colorEnum
  className?: string
  children: ReactNode
  onClick?: React.MouseEventHandler<HTMLDivElement>
  style?: CSSProperties
}


const Icon: React.FC<IconProps> = ({
  color = '--color-black',
  className,
  style,
  children,
  onClick,
}) => {
  return (
    <div
      onClick={ onClick }
      className={ className }
      style={{
        ...style,
        color: `var(${ color })`,
      }}
    >
      { children }
    </div>
  )
}

export default Icon
