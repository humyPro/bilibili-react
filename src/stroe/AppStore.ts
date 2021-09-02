import { action, autorun, flow, makeObservable, observable, runInAction } from 'mobx'

class AppStore {
  constructor() {
    makeObservable(this)
  }

  @observable id = 0

  @observable appName = 'react-ts-mobx'

  @action setAppName(newVal: string) {
    this.appName = newVal
  }

  @observable data = []

  @observable asyncData: number[] = []

  testFlow = flow(function* fetchData(this: AppStore) {
    this.data = yield (async () => [1, 2, 3])()
  })

  // 错误的示范， 需要用上面的方式
  testAsync = async () => {
    !(async () => [2, 3, 4])().then(res => {
      runInAction(() => {
        this.asyncData = res
      })
    })
  }
}

export default AppStore
