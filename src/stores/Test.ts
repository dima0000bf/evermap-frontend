import {
  action, makeObservable, observable, runInAction,
} from 'mobx'

export class Test {
  @observable public kek = 0

  constructor() {
    makeObservable(this)
  }

  @action public tick() {
    console.log('tick')

    runInAction(() => {
      this.kek = 0
    })
  }
}
