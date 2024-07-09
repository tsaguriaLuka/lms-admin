import { create } from 'zustand';
import {
  devtools,
  persist
} from "zustand/middleware";

const useSidebarStore = create(
  devtools(
    persist((set) => ({
        sidebarItems: [
          {
            label: 'Users',
            link: '/',
            active: true,
          },
          {
            label: 'Program',
            link: '/program',
            active: false,
          },
        ],

        isOpened: true,

        setOpened: (isOpened) => set(() => ({ isOpened })),
      }),
      {
        name: 'sidebar-storage'
      }
    ),
    {
      name: 'sidebar',
      enabled: true
    }));

export default useSidebarStore;
