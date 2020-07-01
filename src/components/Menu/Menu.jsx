import React, { Component } from "react";
import { Menu  } from "antd";
import axios from 'axios'
import {withRouter} from "react-router-dom";

import {observer, inject} from "mobx-react";
@inject('stylemain')
@observer

class Menus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      MenuList:[],
      navList:[]
    };
  }
  componentDidMount() {
    axios.get('/navlist').then((res) => {
        // console.log(res.data.data)
        this.setState({
            MenuList: this.renderMenu(res.data.data),
            navList:res.data.data
        })
    })
  }
  handleClick = (e) => {
    // console.log('click ', this.state.navList);
    let key = e.key;
    let arr = this.state.navList;
    let newarr = [];
    var element = [];
    arr.forEach((item,index) => {
        newarr[index] = item;
        newarr[index].children.forEach( el =>{
            element.push(el)
        } )
    });
    let newkey = element.filter(item => {
        return item.key === key
    });
    // console.log('路由信息', newkey[0].path)
    this.props.history.push('/home/' + newkey[0].path)
};
  renderMenu = (data) =>{
      const { SubMenu } = Menu;
      return data.map((item,index) => {
        if (item.children) {
            return  <SubMenu key={item.key} title={item.title} >
                        {this.renderMenu(item.children)}
                    </SubMenu>
        } else {
            // 否则正常返回
            return <Menu.Item key={item.key}>{item.title}</Menu.Item>
        }
      })
  };
  render() {
    return (
      <div style={{ width: 200 }}>
        <Menu
            theme={this.props.stylemain.MenuTheme}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
           
            onClick={this.handleClick}
        >
            {this.state.MenuList}
        </Menu>
      </div>
    );
  }
}

export default withRouter(Menus);
