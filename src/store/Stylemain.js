import {action, observable} from "mobx";

class Stylemain {
    @observable DrawerVisible = false;

    @action DrawerSwitch() {
        this.DrawerVisible = true
    }

    @action Drawerclose() {
        this.DrawerVisible = false
    }

}

export default Stylemain;