import React, { useCallback, useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../provider'

const list: Function[] = []
const HomePage = () => {
  debugger
  const appStore = useStore('appStore')
  const [name, setName] = useState<string>(() => 'aa')
  const cb = useCallback(() => {
    console.log(name)
  }, [name])
  list.push(cb)
  console.log('equle', name, Object.is(list[0], list[list.length - 1]))
  console.log('start')
  debugger
  useEffect(() => {})
  console.log('end')

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
