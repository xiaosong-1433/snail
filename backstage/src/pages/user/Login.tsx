import React,{useEffect} from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './Login.less'
import { connect } from 'umi';
import {userStateType} from './model'
const Login = (props:any) => {
  const onFinish = ({username,password}:any) => {
    // console.log('Received values of form: ', values);
    props.dispatch({
      type:'user/login',
      payload:{username,password}
    })
  };

  useEffect(() =>{
    const h = document.documentElement.clientHeight - 1
    const login:any = document.querySelector('.login___TI9qv')
    login.style.height = h + 'px'
  },[])

  return (
    <div className={styles.login}>
        <div className={styles.content}>
            <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        >
        <Form.Item
            name="username"
            rules={[{ 
                required: true,
                pattern: /^[a-zA-Z0-9_-]{4,16}$/,
                message: '用户名必须为4-16位（字母，数字，下划线,-）',
               }]}
        >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
            name="password"
            rules={[{ 
                required: true, 
                // pattern: /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,
                message: '密码最少6为，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符' 
              }]}
        >
            <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            />
        </Form.Item>
        <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
            </Form.Item>

        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
            </Button>
        </Form.Item>
        </Form>
        </div>
    </div>
  );
};

export default connect(
  ({user}:{user:userStateType}) => {
    return user
  }
)(Login)