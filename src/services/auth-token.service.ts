import Cookies from 'js-cookie'
import useAuthStore from "@/store/auth.ts";

export enum EnumTokens {
  'ACCESS_TOKEN' = 'accessToken',
  'REFRESH_TOKEN' = 'refreshToken',
}

export const getAccessToken = () => {
  const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)

  return accessToken || null
}

export const saveToken = (accessToken: string) => {
  Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
    domain: 'localhost',
    sameSite: 'strict',
    expires: 1
  })


  const { setAccessToken } = useAuthStore.getState?.();

  setAccessToken(accessToken)
}

export const removeToken = () => {
  Cookies.remove(EnumTokens.ACCESS_TOKEN)

  const { removeAccessToken } = useAuthStore.getState?.();

  removeAccessToken()
}
