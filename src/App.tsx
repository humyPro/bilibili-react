import React from 'react'
import './App.css'
import { Router, Route, Link } from 'react-router'
import HomePage from './page/HomePage'
import { StoreProvider } from './provider'

function App() {
  debugger
  return (
    <StoreProvider>
      <Router>
        <Route path="/" component={HomePage} />
      </Router>
    </StoreProvider>
  )
}

export default App
