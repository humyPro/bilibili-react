import React from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import routerConfig from './routerConfig'

export default () => <HashRouter>{renderRoutes(routerConfig)}</HashRouter>
