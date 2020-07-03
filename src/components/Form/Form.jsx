import React, {Component} from "react";
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
} from "antd";
import './Form.css'

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


// const format = 'HH:mm:ss';             //时间选择器时间格式
class Forms extends Component {
    formRef=React.createRef();
    
    constructor(props) {
        super(props);
        this.state={
            data: []
        };
    }
    componentDidMount() {
        // console.log(this.props.dataArr )
        this.props.dataArr.then(res =>{
            // console.log(res)
            this.setState({
                data: res
            })
        })
    }
    
    UNSAFE_componentWillReceiveProps() {
        // this.setState({
        //     data: this.props.dataArr
        // })
    }
    
    onSubmit=(val) => {
        console.log('表格内数据:', val);
    };
    formreset=() => {
        // 重置整个表格
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
                      autoComplete='off'    //取消所有表单组件的输入提示
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
                                            <Input style={{width: item.width}}
                                                   placeholder={item.placeholder}
                                                   disabled={item.disabled}
                                            />
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
                                            <InputNumber style={{width: item.width}}
                                                         placeholder={item.placeholder}
                                                         disabled={item.disabled}
                                                         min={1}
                                                         max={101}/>
                                        </Form.Item>
                                    );
                                // case "radio":
                                //     return (
                                //         <Form.Item label={item.title} name={item.code}
                                //                    rules={item.rule}
                                //                    key={i}
                                //                    initialValue={item.iVal}
                                //         >
                                //             <Radio.Group disabled={item.disabled}>
                                //                 {item.options.map((el, index) => (
                                //                     <Radio value={el.key} key={index}>{el.name}</Radio>
                                //                 ))}
                                //             </Radio.Group>
                                //             {/*<Radio.Group options={item.options}></Radio.Group>*/}
                                //         </Form.Item>
                                //     );
                                case "text":
                                    return (
                                        <Form.Item label={item.title}
                                                   name={item.code}
                                                   rules={item.rule}
                                                   key={i} {...TextLayout}
                                                   initialValue={item.iVal}
                                        >
                                            <TextArea placeholder={item.placeholder} allowClear
                                                      autoSize={{minRows: 3, maxRows: 5}}
                                                      style={{width: item.width}}
                                                      disabled={item.disabled}
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
                                                    disabled={item.disabled}
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
                                                    disabled={item.disabled}
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
                                            <CheckboxGroup disabled={item.disabled}>
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
                                            <Rate allowHalf disabled={item.disabled}/>
                                        </Form.Item>
                                    );
                                case "slider":
                                    return (
                                        <Form.Item label={item.title} name={item.code}
                                                   rules={item.rule}
                                                   key={i}
                                                   initialValue={item.iVal}
                                        >
                                            <Slider min={item.min} max={item.max} style={{width: item.width}}
                                                    disabled={item.disabled}/>
                                        </Form.Item>
                                    );
                                case "datepicker":
                                    return (
                                        <Form.Item label={item.title} name={item.code}
                                                   rules={item.rule}
                                                   key={i}
                                                   initialValue={[moment(item.iVal[0], item.Format), moment(item.iVal[1], item.Format)]}
                                        >
                                            <RangePicker picker={item.picker}
                                                         allowClear
                                                         locale={locale}
                                                         disabled={item.disabled}
                                            />
                                        </Form.Item>
                                    );
                                case "timepicker":
                                    return (
                                        <Form.Item label={item.title} name={item.code}
                                                   rules={item.rule}
                                                   key={i}
                                                   initialValue={moment('12:08:23', item.Format)}
                                                   disabled={item.disabled}
                                        >
                                            <TimePicker allowClear placeholder={item.placeholder} locale={locale}
                                                        disabled={item.disabled}/>
                                        </Form.Item>
                                    );
                                case 'button':
                                    return (
                                        <Form.Item {...tailLayout} key={i}>
                                            <Button onClick={this.formreset} type='text'
                                                    disabled={item.disabled}>取消</Button>
                                            <Button htmlType='submit' type='primary'>提交</Button>
                                        </Form.Item>
                                    );
                                default :
                                    return '';
                            }
                        })
                    }
                
                </Form>
            </div>
        );
    }
}

export default Forms;
