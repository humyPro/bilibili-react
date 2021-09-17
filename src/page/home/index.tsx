import React from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../provider'
import { Link } from 'react-router-dom'
import Header from './Header'

const Index = () => {
  const appStore = useStore('appStore')
  return (
    <div className="home">
      <Header />
    </div>
  )
}

export default observer(Index)
