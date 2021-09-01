import { observable } from 'mobx'

class AuthStore {
  @observable name: string = '123123'

  @observable password: string = ''
}

export default AuthStore
