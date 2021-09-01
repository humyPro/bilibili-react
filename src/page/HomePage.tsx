import React from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../provider'

const HomePage = () => {
  const appStore = useStore('appStore')
  debugger
  return (
    <div>
      <div>{appStore.appName}</div>
    </div>
  )
}

export default observer(HomePage)
