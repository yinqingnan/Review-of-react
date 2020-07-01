import {action, observable} from "mobx";

class Stylemain {
    @observable DrawerVisible=false;
    @observable MenuTheme='dark';
    @observable MenuThemevalue=true;
    @observable Menubackground='#001529';
    
    @action DrawerSwitch() {
        this.DrawerVisible=true
    }
    
    @action Drawerclose() {
        this.DrawerVisible=false
    }
    
    @action Menuthemeswitch1() {
        this.MenuTheme='dark';
        this.Menubackground='#001529'
    }
    
    @action Menuthemeswitch2() {
        this.MenuTheme='light';
        this.Menubackground='#edeeef'
        
    }
}

export default Stylemain;
