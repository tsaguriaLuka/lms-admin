import React from 'react';
import Styles from './index.module.scss';
import { colorEnum } from "@/enums/colorEnum.ts";

interface IProgressCircleProps {
  progress?: number
  radius?: number
  stroke?: number
  backgroundColor?: colorEnum
  color?: colorEnum
  text?: boolean
}

const ProgressCircle: React.FC<IProgressCircleProps> = ({
  progress = 43,
  radius= 8,
  stroke= 2,
  backgroundColor = colorEnum.LINE,
  color = colorEnum.GREEN,
  text = true
}) => {
  const normalizedRadius = radius - stroke / 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference
  const strokeDasharray = circumference + ' ' + circumference

  return (
    <div className={ Styles.ProgressBar }>
      <svg
        height={ radius * 2 }
        width={ radius * 2 }
        className={ Styles.ProgressBar__circle }
      >
        <circle
          stroke='currentColor'
          fill="transparent"
          strokeWidth={ stroke }
          style={{
            color: `var(${ backgroundColor })`
          }}
          r={ normalizedRadius }
          cx={ radius }
          cy={ radius }
        />

        <circle
          stroke="currentColor"
          fill="transparent"
          strokeWidth={ stroke }
          strokeDasharray={ strokeDasharray }
          style={{
            strokeDashoffset,
            color: `var(${ color })`
          }}
          strokeLinecap="round"
          r={ normalizedRadius }
          cx={ radius }
          cy={ radius }
        />
      </svg>

      {
        text && <p>
          Прогресс { progress }%
        </p>
      }
    </div>
  )
}

export default ProgressCircle
