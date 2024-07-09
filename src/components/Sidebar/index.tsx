import React from 'react';

import styles from './index.module.scss';

import { useState } from 'react';
import { authService } from "@/services/auth.service.ts";
import useSidebarStore from "@/store/sidebar.ts";
import {
  useLocation,
  Link,
  useNavigate
} from 'react-router-dom';

import classNames from 'classnames/bind';
import IconHat from '@components/Icons/hat.tsx';
import IconArrowLeftDouble from '@components/Icons/ArrowLeftDouble.tsx';
import IconLogout from "@components/Icons/logout.tsx";

export default function Sidebar() {
  const [isMouseOver, setMouseOver] = useState(false);

  const { pathname } = useLocation();

  const navigate = useNavigate()

  const logout = async () => {
    const data = await authService.logout()

    if (data) return navigate('/login')
  }

  const {
    sidebarItems,
    isOpened,
    setOpened
  } = useSidebarStore()

  return (
    <div
      className={classNames(
        styles.Sidebar,
        {
          [styles['Sidebar--opened']]: isOpened
        }
      )}
      onMouseOver={ () => !isOpened && setMouseOver(true) }
      onMouseOut={ () => isMouseOver && setMouseOver(false) }
    >
      <div className={styles.Sidebar__header}>
        <div className={styles['Sidebar__header-logo']}>
          <IconHat />

          { isOpened && <p>Admin Panel</p> }
        </div>

        {
          isOpened &&
          <div
            onClick={ () => setOpened(!isOpened)}
          >
            <IconArrowLeftDouble
              width={ 16 }
              height={ 16 }
            />
          </div>
        }
      </div>

      {
        (!isOpened && isMouseOver) &&
        <div className={styles.Sidebar__expand} onClick={() => setOpened(true)}>
          open
        </div>
      }

      <div className={styles.Sidebar__menu}>
        {
          sidebarItems.map((item, index) => (
            <Link
              to={ item.link }
              key={ item.link }
              className={
                classNames(
                  styles['Sidebar__menu-item'],
                  {
                    [styles['Sidebar__menu-item--active']]: item.active
                  }
                )
              }
            >
              <IconHat />

              { isOpened && <p>{ item.label }</p> }
            </Link>
          ))
        }
      </div>

      <div
        className={ styles.Sidebar__footer }
        onClick={ logout }
      >
        <IconLogout />

        { isOpened && <p>Logout</p> }
      </div>
    </div>
  );
}
