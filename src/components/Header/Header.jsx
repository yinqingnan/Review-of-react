import React, {Component} from "react";
import {Avatar, Menu, Dropdown, Badge, message} from "antd";
import "./Header.css";
import {
    SettingOutlined,
    UserOutlined,
    UnlockOutlined,
    SkinOutlined,
    PoweroffOutlined,
} from "@ant-design/icons";
import {Drawers} from '../index.js'
import {observer, inject} from "mobx-react";

@inject("homeStore", "stylemain")
@observer

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.headclick = this.headclick.bind(this)
    }

    choiceClick = ({key}) => {
        switch (key) {
            case '0':
                message.error('暂无信息');
                break;
            case '1':
                this.props.stylemain.DrawerSwitch();
                break;
            case '2':
                message.error('暂无信息');
                break;
            case '3':
                message.error('暂无信息');
                break;
            default:
                break;
        }
    };

    headclick() {
        this.props.homeStore.addNum();
        if (this.props.homeStore.homeNum > 10) {
            this.props.homeStore.ResetNum()
        }
    }

    render() {
        const menu = (
            <Menu onClick={this.choiceClick}>
                <Menu.Item key="0">
                    <UserOutlined className="iconstyle"></UserOutlined>
                    个人中心
                </Menu.Item>
                <Menu.Item key="1">
                    <SkinOutlined className="iconstyle"/>
                    样式设置
                </Menu.Item>
                <Menu.Item key="2">
                    <UnlockOutlined className="iconstyle"/>
                    修改密码
                </Menu.Item>
                <Menu.Divider/>
                <Menu.Item key="3">
                    <PoweroffOutlined className="iconstyle"/>
                    退出登录
                </Menu.Item>
            </Menu>
        );
        return <div style={{width: "100px"}}>
            <Badge count={this.props.homeStore.homeNum}>
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    icon={<UserOutlined/>}
                    onClick={this.headclick}
                />
            </Badge>
            <Dropdown
                overlay={menu}
                placement="bottomCenter"
                arrow
                trigger={["click"]}
            >
                <SettingOutlined
                    style={{color: "pink", cursor: "pointer", fontSize: '22px', marginLeft: '16px'}}
                    onClick={(e) => e.preventDefault()}
                >
                </SettingOutlined>
            </Dropdown>
            <Drawers></Drawers>
        </div>;
    }
}

export default Header;


