import React from 'react'
import './App.scss'
import { StoreProvider } from './provider'
import Router from './router'

function App() {
  return (
    <StoreProvider>
      <Router />
    </StoreProvider>
  )
}

export default App
