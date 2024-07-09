import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import Cookies from 'js-cookie'

import { EnumTokens } from "@/services/auth-token.service.ts";


const PrivateRoutes = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)

    if (pathname !== 'login' && !accessToken) {
      navigate('/login')
    }
  }, []);



  return(
    <Outlet/>
  )
}

export default PrivateRoutes
