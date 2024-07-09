import { create } from 'zustand';
import {
  devtools,
  persist
} from 'zustand/middleware';

const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        accessToken: null,
        setAccessToken: (accessToken) => set({ accessToken }),
        removeAccessToken: () => set({ accessToken: null }),
      }),
      {
        name: 'auth-storage',
      }
    ),
    {
    name: 'auth',
    enabled: true
  }
))

export default useAuthStore;
