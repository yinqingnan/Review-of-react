import React, { Component } from "react";
import "./home.css";
import { Layout } from "antd";
import { Menus, Headers } from "../..//components/index.js";
import { Route } from "react-router-dom";
// import { routes } from "/router/childrenroutes";
import { routes } from "../../router/childrenroutes";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
const { Header, Sider, Content } = Layout;

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div className="box">
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <h2 className="logo">LOGO</h2>
            <Menus />
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              <div className="Header">
                {React.createElement(
                  this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: this.toggle,
                  }
                )}
                <div>
                  <h1>asdasdasd</h1>
                  <div>
                    <Headers />
                  </div>
                </div>
              </div>
            </Header>
            <Content className="site-layout-background">
              {routes.map((item) => {
                return (
                  <Route
                    key={item.path}
                    path={item.path}
                    component={item.component}
                  ></Route>
                );
              })}
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default home;
