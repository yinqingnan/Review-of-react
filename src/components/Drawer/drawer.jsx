import React, {Component} from 'react';
import './drawer.css'
import {Drawer} from 'antd';
import {SketchPicker} from 'react-color';
import {observer, inject} from "mobx-react";

@inject("stylemain")
@observer
class Drawers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: '#fff'
        }
    }

    handleChangeComplete = (color) => {
        this.setState({background: color.hex});
    };
    handleChange = (color,event) =>{
        console.log(color);
        console.log(event);
    };
    onClose = () => {
        this.props.stylemain.Drawerclose()
    };

    render() {
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
                    {/*<p>Some contents...</p>*/}
                    {/*<p>Some contents...</p>*/}
                    {/*<p>Some contents...</p>*/}
                    <SketchPicker color={this.state.background}
                                  onChangeComplete={this.handleChangeComplete}
                                  onChange={this.handleChange}></SketchPicker>
                </Drawer>
            </div>
        );
    }
}

export default Drawers;
