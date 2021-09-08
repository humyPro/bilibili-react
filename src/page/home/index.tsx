import React from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../provider'
import { Link } from 'react-router-dom'

const Index = () => {
  const appStore = useStore('appStore')
  return (
    <div>
      <h4>{appStore.appName}</h4>
      <Link to="/login">登录</Link>
    </div>
  )
}

export default observer(Index)
