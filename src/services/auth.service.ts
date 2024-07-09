import { axiosWithAuth } from "@/api/interceptors.ts";
import { tryCatch } from "@/utils/try-catch.ts";
import {
  removeToken,
  saveToken
} from "@/services/auth-token.service.ts";

export const authService = {
  async login(payload) {
    const { data } = await tryCatch(axiosWithAuth.post('/auth/login', payload))

    if (data?.data?.accessToken) saveToken(data?.data?.accessToken)

    return data?.data
  },

  async getNewToken() {
    const { data } = await tryCatch(axiosWithAuth.post('/auth/login/access-token', data))

    if (data?.accessToken) saveToken(data?.accessToken)

    return data
  },

  async logout() {
    const { data } = await tryCatch(axiosWithAuth.post('/auth/logout'))

    if (data) removeToken()

    return data
  }
}
