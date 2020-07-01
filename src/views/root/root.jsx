import React, {Component} from "react";
import axios from 'axios'
// import {Switch, Form, Radio, Input, Button, DatePicker, TimePicker, Transfer, Rate, Checkbox, Calendar, Slider, Upload } from "antd";
import { Switch,Form,Radio,Input ,Button} from 'antd';

let TestData={
    "code": 0,
    "itemList": [{
        "itemId": 65,
        "itemName": "审核意见",
        "itemNameEn": "shyj",
        'placeholder':"填写内容",
        "type": "TEXT",
        "options": "",
        "optionsEn": "",
        "ifrequire": 1,
        "listOrder": 1,
        "rules":[{required: true,message: "请选择"}],
        "val": "123123123"
    }, {
        "itemId": 66,
        "itemName": "审核结果",
        "itemNameEn": "shjg",
        "type": "RADIO",
        'placeholder':"填写内容",
        "options": "PASS:通过\r\nNOT_PASS:不通过",
        "optionsEn": "NOT_PASS:Not Pass",
        "ifrequire": 1,
        "listOrder": 2,
        "rules":[{required: true,message: "请选择"}],
        "val": "1"
    }]
};

class home extends Component {
    constructor(props) {
        super(props);
        this.state={
            data: []
        };
    }
    
    componentDidMount() {
        axios.get('/datalist').then(res => {
            console.log(res.data);
            this.setState({
                data: res.data
            })
        });
        console.log(this.formRef)
    }
    
    onSubmit = (val) => {
        // e.preventDefault();
        console.log(val)
        // this.props.form.validateFieldsAndScroll((err, values) => {
        //     if (!err) {
        //         console.log('Received values of form: ', values);
        //     }
        // });
    };
    render() {
        const {TextArea}=Input;
        // const {getFieldDecorator}=this.props.form;
        return (
            <div className="">
                <Form onFinish={this.onSubmit}>
                    {
                        TestData.itemList.map((item, i) => {
                            switch (item.type) {
                                case 'TEXT':
                                    return (
                                        <Form.Item label={item.itemName} name={item.itemNameEn} rules={[{
                                            required: true,
                                            message: '请填写正确的' }]} key={item.itemId}
                                            
                                        >
                                                <Input style={{width: 230}} defaultValue={item.val} placeholder={item.placeholder}/>
                                        </Form.Item>
                                    );
                                case 'RADIO':
                                    // return (
                                        // <Form.Item label={item.itemName} name={item.itemNameEn} rules={[item.rules]} key={item.itemId}  >
                                        //         <Radio.Group style={{width: 230}} onChange={this.onChange} defaultValue={item.val}>
                                        //             <Radio value={1}>A</Radio>
                                        //             <Radio value={2}>B</Radio>
                                        //             <Radio value={3}>C</Radio>
                                        //             <Radio value={4}>D</Radio>
                                        //         </Radio.Group>
                                        // </Form.Item>
                                    // );
                                default :
                                    return '';
                            }
                        })
                    }
                    <Form.Item>
                        <Button htmlType='submit'>提交</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default home;
