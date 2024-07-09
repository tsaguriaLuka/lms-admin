import styles from './index.module.scss'
import { useState } from "react";

import { authService } from "@/services/auth.service.ts";

import Input from "@components/Input";
import Button from "@components/Button";
import {useNavigate} from "react-router-dom";


export default function Index() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const login = async () => {
    const data = await authService.login({
      email,
      password
    })

    if (data) navigate('/')
  }

  return (
    <div className={ styles.Login }>
      <div className={ styles.Login__form }>
        <h4
          className='text-center'
        >
          Вход в админ панель
        </h4>

        <Input
          placeholder='Email'
          type={ 'email' }
          onInput={ (event) => setEmail(() => event.target.value) }
        />

        <Input
          placeholder='Password'
          type={ 'password' }
          onInput={ (event) => setPassword(() => event.target.value) }
        />

        <Button onClick={ login }>
          Продолжить
        </Button>

        <div className={ styles['Login__form--button'] }></div>
      </div>
    </div>
  )
}
