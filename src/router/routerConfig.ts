import App from '../App'
import HomePage from '../page/HomePage'

const routeConfig = [
  {
    path: '/',
    component: HomePage,
    indexRoute: { component: HomePage },
    childRoutes: []
  }
]

export default routeConfig
