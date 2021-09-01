import React from 'react'
import './App.css'

import HomePage from './page/HomePage'
import { StoreProvider } from './provider'

function App() {
  debugger
  return (
    <StoreProvider>
      <HomePage />
    </StoreProvider>
  )
}

export default App
