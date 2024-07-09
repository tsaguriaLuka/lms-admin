import styles from './index.module.scss';

import Header from '@components/Header';
import Sidebar from '@components/Sidebar';

import { Outlet } from "react-router-dom";
import useSidebarStore from "@/store/sidebar.ts";

const DefaultLayout = () => {
  const { isOpened } = useSidebarStore()

  return (
    <div className={ `${ styles.Layout } ${ isOpened && styles['Layout__sidebarOpened'] }`}>
      <Sidebar />

      <Header />

      <div className={ styles.Layout__page }>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DefaultLayout;
