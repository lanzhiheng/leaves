export class AppDispatcher {
  constructor() {
    this.dispatcherMethod = () => {}
  }

  static register(func) {
    this.dispatcherMethod = func
  }

  static dispatch(param) {
    this.dispatcherMethod(param)
  }
}
