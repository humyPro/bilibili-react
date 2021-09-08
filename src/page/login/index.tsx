import React, { useState } from 'react'
import FormInput from './FormInput'
import BlButton from '../../compoment/blButton'

const Login = () => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  const login = (ac: string, pw: string) => {}

  return (
    <div className="page-login">
      <div className="header">
        <span>密码登录</span>
      </div>
      <div className="banner" />
      <div className="login-form">
        <FormInput
          fieldName="账号"
          onchange={value => {
            setAccount(value)
          }}
        />
        <FormInput
          fieldName="密码"
          type="password"
          onchange={value => {
            setPassword(value)
          }}
        />
        <BlButton text="登录" onclick={() => {}} />
      </div>
      <div className="notify" />
    </div>
  )
}

export default Login
