import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../provider'

const HomePage = () => {
  const appStore = useStore('appStore')
  const [name, setName] = useState<string>('11')

  console.log('-----------------')

  return (
    <div>
      <div
        onClick={() => {
          appStore.setAppName(`${appStore.appName},`)
        }}
      >
        {appStore.appName}
      </div>
      <div
        onClick={() => {
          appStore.testFlow()
          appStore.testAsync()
        }}
      >
        {name}
      </div>
      {appStore.data.map(v => (
        <div key={v}>{v}</div>
      ))}
      {appStore.asyncData.map(v => (
        <div key={v}>{v}</div>
      ))}
    </div>
  )
}

export default observer(HomePage)
