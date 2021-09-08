import Home from '../page/home'
import Login from '../page/login'

const routeConfig = [
  {
    path: '/',
    exact: true,
    component: Home,
    indexRoute: { component: Home },
    childRoutes: []
  },
  {
    path: '/login',
    component: Login
  }
]

export default routeConfig
