import AuthStore from './AuthStore'
import AppStore from './AppStore'
import { configure } from 'mobx'

console.log('config mobx...')

export default {
  authStore: new AuthStore(),
  appStore: new AppStore()
}
