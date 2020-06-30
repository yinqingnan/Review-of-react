// 引入组件
import Login from '@/views/login/login.jsx'
import home from '@/views/home/home.jsx'



import React ,{Component} from 'react';  //引入react
import {Router,Route,Switch,Redirect} from 'react-router-dom'  //引入react路由相关
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
class RouterConfig extends Component {
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path='/' exact render={()=>(
                        <Redirect to='/login'/>
                    )}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/home' component={home}/>
                </Switch>
            </Router>
        )
    }
}
export {RouterConfig } ;