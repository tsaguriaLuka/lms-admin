import { Link } from "react-router-dom";

import styles from "./index.module.scss";
import { colorEnum } from "@/enums/colorEnum.ts";

import IconRocket from "@components/Icons/Rocket.tsx";
import IconSuccess from "@components/Icons/Success.tsx";
import Icon from "@components/Icons/Icon";
import IconQuestionnaire from "@components/Icons/Questionnaire.tsx";
import IconBox from "@components/Icons/Box";


const ProgramLesson = ({ rounded= true }) => {
  return (
    <div className={
      `
        ${ styles.Lesson }
        ${ rounded && styles['Lesson--rounded']}
      `
    }>
      <div className='flex gap-6 items-center'>
        <IconBox
          color={ colorEnum.WHITE }
          background={ colorEnum.BLACK }
        >
          <IconRocket />
        </IconBox>

        <div className={ styles.Lesson__content }>
          <div className={ styles['Lesson__content-title'] }>
            Правила обучения и стартовый опросник
          </div>

          <div className={ styles['Lesson__content-materials'] }>
            <Link
              className={ styles['Lesson__content-materials-material'] }
              to='/lesson'
            >
              <Icon
                color={ colorEnum.GREEN }
              >
                <IconSuccess
                  width={ 16 }
                  height={ 16 }
                />
              </Icon>

              <p>Правила обучения</p>
            </Link>

            <div className={ styles['Lesson__content-materials-material'] }>
              <Icon
                color={ colorEnum.PRIMARY }
              >
                <IconQuestionnaire
                  width={ 16 }
                  height={ 16 }
                />
              </Icon>

              <p>Анкета студента</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramLesson
