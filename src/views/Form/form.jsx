import React, {Component} from 'react';
import axios from "axios";
import {Forms} from '@/components/index'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            data: [],
        };
    }
    
    componentDidMount() {
        axios.get('/datalist').then(res => {
            this.setState({
                data: res.data
            });
            console.log(this.state.data);
        });
    }
    
    render() {
        return (
            <div>
                <Forms dataArr={axios.get('/datalist').then(res=>{return res.data})}></Forms>
            </div>
        );
    }
}

export default Form;
