import HomeStore from "./homeStore";
import Stylemain from "./Stylemain";

let homeStore = new HomeStore();
let stylemain = new Stylemain();
const stores = {
    homeStore, stylemain
};
/// 默认导出接口
export default stores;