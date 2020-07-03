//引入需要使用的页面组件
import {roots, role ,forms,table} from '@/views/index'
// 配置组件路由

export const routes=[
    {path: '/home/root', component: roots},
    {path: '/home/role', component: role},
    {path: '/home/form', component: forms},
    {path: '/home/table', component: table},
];
