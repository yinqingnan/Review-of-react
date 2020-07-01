import React, {Component} from 'react';
import './drawer.css'
import {Drawer, Button} from 'antd';
import {SketchPicker} from 'react-color';
import {observer, inject} from "mobx-react";
import {CheckOutlined,ToolOutlined} from '@ant-design/icons'

@inject("stylemain")
@observer
class Drawers extends Component {
    constructor(props) {
        super(props);
        this.state={
            background: '#fff',
            isShow: true
        }
    }
    
    handleChangeComplete=(color) => {
        this.setState({background: color.hex});
    };
    handleChange=(color, event) => {
        console.log(color.hex);
    };
    onClose=() => {
        this.props.stylemain.Drawerclose()
    };
    onswitch=(key) => {
        switch (key) {
            case 1:
                this.props.stylemain.Menuthemeswitch1();
                this.setState({
                    isShow: true
                });
                break;
            case 2:
                this.props.stylemain.Menuthemeswitch2();
                this.setState({
                    isShow: false
                });
                break;
            default:
                break;
        }
        
    };
    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };
    
    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };
    
    render() {
        const popover = {
            position: 'absolute',
            zIndex: '2',
        };
        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        };
        return (
            <div>
                <Drawer
                    title="全局样式设置"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.props.stylemain.DrawerVisible}
                    width='400'
                >
                    
                    
                    <ul className='setmain'>
                        <li>
                            <h1>
                                菜单主题修改
                            </h1>
                            <div className='Menutheme' style={{marginTop:'30px'}}>
                                <div onClick={() => this.onswitch(1)}>
                                    <CheckOutlined style={{display: this.state.isShow ? "block" : "none"}}/>
                                    <img src={require('../../assets/imgs/themeimg/3.png')} alt=""/>
                                    <h1>{this.state.isShow}</h1>
                                </div>
                                <div onClick={() => this.onswitch(2)}>
                                    <CheckOutlined style={{display: this.state.isShow ? "none" : "block"}}/>
                                    <img src={require('../../assets/imgs/themeimg/2.png')} alt=""/>
                                
                                </div>
                            </div>
                        </li>
                        <li>
                            <h1>主题颜色修改</h1>
                            <Button onClick={ this.handleClick } type="primary" icon={<ToolOutlined />}>颜色选择器</Button>
                            { this.state.displayColorPicker ? <div style={ popover }>
                                <div style={ cover } onClick={ this.handleClose }/>
                                <SketchPicker color={this.state.background}
                                              wdith ={'350px'}
                                              onChangeComplete={this.handleChangeComplete}
                                              onChange={this.handleChange}
                                >
                                </SketchPicker>
                            </div> : null }
                          
                        </li>
                    </ul>
                </Drawer>
            </div>
        );
    }
}

export default Drawers;
