import React,{Fragment,useState} from 'react'
import Breadcrumb from '@/components/MyBreadcrumb'
import styles from './UserList.less'
import {Space,Button,Input,Modal,Form} from 'antd'
import UserListTable from './UserLIstTable'
import { connect } from 'umi'
import {UserStateType} from'./model'
const { Search } = Input;
function userList(props:any) {
    const [flag,setFlag] = useState(false)
    const [formValues,setFormValues] = useState({
        username:'',
        password:'',
        idnumber:'',
        phone:'',
    })
    const [form] = Form.useForm()
    const onSearch = (values:string):void => {
        props.dispatch({
            type:'userList/selectUser',
            payload:values
        })
    }
    const open = () => {
        setFlag(true)
    }
    const handleOk = () => {
        props.dispatch({
            type:'userList/addUser',
            payload:formValues
        })
        setFlag(false)
        form.resetFields()    
        location.reload()   
    }
    const handleCancel = () => {
        setFlag(false)
    }
    const getValues = (changeValue:any,allValue:any) => {
        setFormValues(allValue) 
    }
    return (
        <Fragment>
            <Breadcrumb/>
            <div className={styles.user_list}>
                {/* 上部分 */}
                <div className={styles.search_box}>
                <Space size={15}>
                    <Search
                    placeholder="请输入用户名"
                    onSearch={onSearch}
                    enterButton
                    />
                    <Button type="primary" onClick = {open}>
                    {' '}
                    添加用户{' '}
                    </Button>
                    <Modal title='添加用户' visible={flag} onOk={handleOk} onCancel={handleCancel}>
                        <Form
                            labelCol= { {span: 6} }
                            wrapperCol= { {span: 16} }
                            onValuesChange={getValues}
                            form = {form}
                        >
                            <Form.Item
                                label="用户名"
                                name="username"
                                rules={[{ required: true,pattern:/^[a-zA-Z0-9_-]{4,16}$/,message: '用户名错误，格式为4到16位(字母，数字，下划线，减号)' }]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="密码"
                                name="password"
                                rules={[{ required: true,pattern:/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,message: '密码错误，格式为最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符' }]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="身份证号码"
                                name="idnumber"
                                rules={[{ required: true,pattern:/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/,message: '身份证号码错误，请输入正确的身份证号码' }]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="电话"
                                name="phone"
                                rules={[{ required: true,pattern:/^(?:(?:\+|00)86)?1[3-9]\d{9}$/,message: '电话号码错误，请输入正确的电话号码' }]}
                            >
                                <Input/>
                            </Form.Item>
                        </Form>
                    </Modal>
                </Space>
                </div>
                {/* 下部分 */}
                <UserListTable/>
            </div>
        </Fragment>
    )
}

export default connect(({userList}:{userList:UserStateType}) => userList)(userList)
