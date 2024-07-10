import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from './index.module.scss'
import { useTheme } from "@/theme.tsx";
import useSidebarStore from "@/store/sidebar.ts";

import Icon from "@components/Icons/Icon";
import IconTheme from "@components/Icons/theme.tsx";
import IconUserBadge from "@components/Icons/UserBadge.tsx";
import IconChevronLeft from "@components/Icons/ChevronLeft.tsx";

export default function Header() {
  const { toggleTheme, theme } = useTheme()

  const { isOpened} = useSidebarStore()

  const { pathname } = useLocation();

  const isNavButtonVisible = useMemo(() =>
    pathname.includes('/lesson'),[pathname])

  return (
    <div
      className={styles.Header}
    >
      {
        isNavButtonVisible &&
        <Link
          className={`
            ${ styles.Header__navButton }
            ${ isOpened ? styles['Header__navButton--sidebarOpened'] : '' }  
          `}
          to='/'
        >
          <Icon>
            <IconChevronLeft width={ 10 } height={ 10 }/>
          </Icon>

          <p>Назад к программе</p>
        </Link>
      }

      <div className={ styles.Header__wrapper }>
        <div
          className={styles.Header__theme}
          style={{
            color: theme ? 'var(--color-yellow)' : 'var(--color-dark-grey)'
          }}
          onClick={(event) => toggleTheme(event)}
        >
          <IconTheme/>
        </div>

        <div className={styles.Header__userBadge}>
          <IconUserBadge
            width={ 32 }
            height={ 32 }
          />

          <div className={styles.Header__userBadge__info}>
            <p>Имя пользователя</p>
          </div>
        </div>
      </div>
    </div>
  )
}
