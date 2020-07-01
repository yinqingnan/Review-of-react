import React, { Component } from "react";
import "./login.css";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
class Login extends Component {
  formRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      btnstyle: {
        marginLeft: "50px",
      },
      passd: "123",
      user: "123",
      bg: {
        backgroundImage:
          "url(" +
          require("../../assets/imgs/bg0" + new Date().getDay() + ".jpg") +
          ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
    };
  }
  onSubmit = (val) => {
    // console.log("Success:", val);
    axios
      .post("/userLogin/login", {
        username: val.username,
        password: val.password,
      })
      .then((res) => {
        if (res.data === "登录成功") {
          message.success("登录成功", 2);
          this.props.history.push('/home');
        } else if (res.data === "用户不存在") {
          message.error(res.data, 1);
        } else if (res.data === "密码错误") {
          message.error(res.data, 1);
        }
      });
  };
  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  btnclick = (e) => {
    this.formRef.current.resetFields();
  };

    
    render() {
    return (
      <div className="box" style={this.state.bg}>
        <div className="Login">
          <h2>系统登录</h2>
          <Form
            ref={this.formRef}
            name="form"
            initialValues={{
              username: "",
              password: "",
            }}
            onFinish={this.onSubmit}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="账户"
              name="username"
              rules={[
                {
                  required: true,
                  message: "请输入账户名！",
                },
              ]}
            >
              <Input allowClear placeholder="请输入账户名！"></Input>
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: "请输入您的密码！",
                },
              ]}
            >
              <Input.Password
                placeholder="请输入您的密码！"
                allowClear
              ></Input.Password>
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Button
                type=""
                onClick={this.btnclick}
                style={this.state.btnstyle}
              >
                重置
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
export default Login;
