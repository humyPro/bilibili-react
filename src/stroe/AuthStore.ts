import { observable } from 'mobx'

class AuthStore {
  @observable name = '123123'

  @observable password = ''
}

export default AuthStore
