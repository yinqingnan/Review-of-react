import React, {Component} from "react";
import axios from 'axios'
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import {
    Switch,
    Form,
    Radio,
    Input,
    Button,
    Select,
    InputNumber,
    DatePicker,
    TimePicker,
    Rate,
    Checkbox,
    Slider,
    Upload
} from "antd";

moment.locale('zh-cn');
const layout={
    labelCol: {span: 10},
    wrapperCol: {span: 14},
};
const tailLayout={
    wrapperCol: {offset: 10, span: 14},
};
const TextLayout={
    labelCol: {span: 10},
    wrapperCol: {span: 5},
};

const dateFormat='YYYY/MM/DD';

class home extends Component {
    formRef=React.createRef();
    
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
        // console.log(this.formRef);
        console.log(locale);
    }
    
    onSubmit=(val) => {
        // e.preventDefault();
        console.log(val)
    };
    formreset=() => {
        this.formRef.current.resetFields();
    };
    
    render() {
        const {TextArea}=Input;
        const {Option}=Select;
        const CheckboxGroup=Checkbox.Group;
        const {RangePicker}=DatePicker;
        return (
            <div className="">
                <Form onFinish={this.onSubmit}
                      ref={this.formRef}
                      {...layout}
                >
                    {
                        this.state.data.map((item, i) => {
                            switch (item.type) {
                                case 'input':
                                    return (
                                        <Form.Item label={item.title}
                                                   name={item.code}
                                                   rules={item.rule}
                                                   key={i}
                                                   initialValue={item.iVal}
                                        >
                                            <Input style={{width: item.width}} placeholder={item.placeholder}/>
                                        </Form.Item>
                                    );
                                case 'numbertxt':
                                    return (
                                        <Form.Item label={item.title}
                                                   name={item.code}
                                                   rules={item.rule}
                                                   key={i}
                                                   initialValue={item.iVal}
                                        >
                                            <InputNumber style={{width: item.width}} placeholder={item.placeholder}
                                                         min={1}
                                                         max={101}/>
                                        </Form.Item>
                                    );
                                case "radio":
                                    return (
                                        <Form.Item label={item.title} name={item.code}
                                                   rules={item.rule}
                                                   key={i}
                                                   initialValue={item.iVal}
                                        >
                                            <Radio.Group>
                                                {item.options.map((el, index) => (
                                                    <Radio value={el.key} key={index}>{el.name}</Radio>
                                                ))}
                                            </Radio.Group>
                                            {/*<Radio.Group options={item.options}></Radio.Group>*/}
                                        </Form.Item>
                                    );
                                case "text":
                                    return (
                                        <Form.Item label={item.title} name={item.code} rules={item.rule}
                                                   key={i} {...TextLayout}
                                                   initialValue={item.iVal}
                                        >
                                            <TextArea placeholder={item.placeholder} allowClear
                                                      autoSize={{minRows: 3, maxRows: 5}}
                                                      style={{width: item.width}}
                                            ></TextArea>
                                        </Form.Item>
                                    );
                                case "switch":
                                    return (
                                        <Form.Item label={item.title} name={item.code}
                                                   rules={item.rule}
                                                   key={i}
                                                   initialValue={item.iVal}
                                                   valuePropName='checked'
                                        >
                                            <Switch checkedChildren="开启" unCheckedChildren="关闭"
                                                    checked={item.iVal}
                                            ></Switch>
                                        </Form.Item>
                                    );
                                case "select":
                                    return (
                                        <Form.Item label={item.title} name={item.code}
                                                   rules={item.rule}
                                                   key={i}
                                                   initialValue={item.iVal}
                                        >
                                            <Select style={{width: item.width}} placeholder={item.placeholder}
                                                    allowClear>
                                                {item.options.map(el => (
                                                    <Option key={el.key}>{el.name}</Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                    );
                                case "checkbox":
                                    return (
                                        <Form.Item label={item.title} name={item.code}
                                                   rules={item.rule}
                                                   key={i}
                                                   initialValue={item.iVal}
                                        >
                                            <CheckboxGroup>
                                                {item.options.map((el, index) => (
                                                    <Checkbox value={el.key} key={index}>{el.name}</Checkbox>
                                                ))}
                                            </CheckboxGroup>
                                        </Form.Item>
                                    );
                                case "rate":
                                    return (
                                        <Form.Item label={item.title} name={item.code}
                                                   rules={item.rule}
                                                   key={i}
                                                   initialValue={item.iVal}
                                        >
                                            <Rate allowHalf/>
                                        </Form.Item>
                                    );
                                case "slider":
                                    return (
                                        <Form.Item label={item.title} name={item.code}
                                                   rules={item.rule}
                                                   key={i}
                                                   initialValue={item.iVal}
                                        >
                                            <Slider min={item.min} max={item.max} style={{width: item.width}}/>
                                        </Form.Item>
                                    );
                                case "datepicker":
                                    return (
                                        <Form.Item label={item.title} name={item.code}
                                                   rules={item.rule}
                                                   key={i}
                                                   initialValue={[moment(item.iVal[0], dateFormat), moment(item.iVal[1], dateFormat)]}
                                        >
                                            <RangePicker picker={item.picker}
                                                         allowClear
                                                         locale={locale}
                                            />
                                        </Form.Item>
                                    );
                                default :
                                    return '';
                            }
                        })
                    }
                    <Form.Item {...tailLayout}>
                        <Button onClick={this.formreset} type='text'>取消</Button>
                        <Button htmlType='submit' type='primary'>提交</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default home;
