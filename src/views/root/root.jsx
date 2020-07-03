import React, {Component} from "react";
import axios from 'axios'
import {Forms} from '@/components/index'
import './root.css'
import {Button} from "antd";

class home extends Component {
    constructor(props) {
        super(props);
        this.state={
            data: [],
            isToggleOn: true,
            display: 'none'
        };
        this.handleClick=this.handleClick.bind(this);
    };
    
    componentDidUpdate() {
        axios.get('/datalist').then(res => {
            this.setState({
                data: res.data
            });
        });
    }
    
    handleClick=() => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
            display: prevState.isToggleOn ? 'block' : 'none'
        }));
    };
    
    render() {
        return (
            <div>
                <Button onClick={this.handleClick}>点击{this.state.isToggleOn ? '开启' : '关闭'}弹窗</Button>
                <div style={{display: this.state.display}}>
                    <Forms dataArr={this.state.data} ></Forms>
                </div>
            </div>
        
        
        )
    }
    
}

export default home;
