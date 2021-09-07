import HomePage from '../page/HomePage'
import Login from '../page/login'

const routeConfig = [
  {
    path: '/',
    exact: true,
    component: HomePage,
    indexRoute: { component: HomePage },
    childRoutes: []
  },
  {
    path: '/login',
    component: Login
  }
]

export default routeConfig
