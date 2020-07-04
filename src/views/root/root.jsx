import React, {Component} from "react";
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

            </div>


        )
    }

}

export default home;
