import {action, observable} from "mobx";
class HomeStore {
  @observable homeNum = 0;
  @action addNum () {
      this.homeNum ++
  }
  @action ResetNum () {
      this.homeNum = 0
  }
}
export default HomeStore;
