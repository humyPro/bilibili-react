import React, { useCallback, useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../provider'
import { Link } from 'react-router-dom'

const list: Function[] = []
const Index = () => {
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
      <Link to="/login">登录</Link>
    </div>
  )
}

export default observer(Index)
