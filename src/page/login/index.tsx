import React, { useState } from 'react'
import FormInput from './FormInput'
import BlButton from '../../compoment/BlButton'
import { login } from '../../api'

const Login = () => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  const doLogin = () => {
    login.getSaltKey().then(res => {
      alert('密码登录暂不支持')
    })
  }

  return (
    <div className="page-login">
      <div className="header">
        <span>密码登录</span>
      </div>
      <div className="banner" />
      <div className="login-form">
        <FormInput
          fieldName="账号"
          placeholder="请输入账号"
          onchange={value => {
            setAccount(value)
          }}
        />
        <FormInput
          fieldName="密码"
          type="password"
          placeholder="请输入密码"
          onchange={value => {
            setPassword(value)
          }}
        />
      </div>
      <div className="button-container">
        <BlButton text="注册" type="secondary" onclick={() => {}} />
        <BlButton text="登录" disable={!account || !password} onclick={doLogin} />
      </div>

      <div className="notify" />
    </div>
  )
}

export default Login
