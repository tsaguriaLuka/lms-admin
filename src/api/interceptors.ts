import axios, { type CreateAxiosDefaults } from 'axios'

import {
  getAccessToken,
  removeToken
} from "@/services/auth-token.service.ts";
import { errorCatch } from "@/api/error.ts";
import { tryCatch } from "@/utils/try-catch.ts";
import { authService } from "@/services/auth.service.ts";

const options: CreateAxiosDefaults = {
  baseURL: 'http://localhost:5555',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
}

const axiosDefault = axios.create(options)
const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
  const accessToken = getAccessToken()

  if (config?.headers && accessToken)
    config.headers.Authorization = `Bearer ${ accessToken }`

  return config
})

axiosWithAuth.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config

    if (
      (
        error?.response?.status === 401 ||
        errorCatch(error) === 'jwt expired' ||
        errorCatch(error) === 'jwt must be provided'
      ) &&
      error.config &&
      !error.constructor._isRetry)
    {
      originalRequest._isRetry = true

      await authService.getNewToken()

      const { error} = await tryCatch(axiosWithAuth.request(originalRequest))

      if (errorCatch(error) === 'jwt expired') removeToken()
    }
  }
)

export { axiosDefault, axiosWithAuth }
