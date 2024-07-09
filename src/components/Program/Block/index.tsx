import styles from "./index.module.scss";
import IconArrowDown from "@components/Icons/ArrowDown.tsx";
import Icon from "@components/Icons/Icon";
import { colorEnum } from "@/enums/colorEnum.ts";
import { useState } from "react";
import ProgressBar from "@components/Progress/Circle";

const ProgramBlock = ({ children }) => {
  const [isOpened, setOpened] = useState(true)

  return (
    <div className={styles.ProgramBlock}>
      <div className={`
        ${ styles.ProgramBlock__header }
        ${ !isOpened && styles['ProgramBlock__header--rounded'] }
      `}>
        <div className={styles['ProgramBlock__header__content']}>
          <div className={styles['ProgramBlock__header-month']}>
            Month 1
          </div>

          <div className={styles['ProgramBlock__header-description']}>
            Month Program Name
          </div>
        </div>

        <div
          className={styles['ProgramBlock__header-info']}
        >
          <ProgressBar />

          <Icon
            className={styles['ProgramBlock__header-info-arrow']}
            color={ colorEnum.DARK_GREY }
            style={{
              transform: `rotate(${ isOpened ? 180 : 0 }deg)`,
              transition: 'transform 0.3s ease'
            }}
            onClick={ () => setOpened(prev => !prev) }
          >
            <IconArrowDown
              width={ 16 }
              height={ 16 }
            />
          </Icon>
        </div>
      </div>

      <div className={styles.ProgramBlock__content }>
        { isOpened && children }
      </div>
    </div>
  )
}

export default ProgramBlock
