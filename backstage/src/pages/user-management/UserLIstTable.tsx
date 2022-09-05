import React,{useEffect,useState} from 'react'
import { Table, TableColumnType,Switch,Button,Space,message,Modal,Popconfirm,Form,Input } from 'antd';
import {connect} from 'umi'
import {UserStateType} from'./model'
import {EditOutlined,DeleteOutlined,SettingOutlined} from '@ant-design/icons'

function UserLIstTable(props:any) {
    const columns: TableColumnType<any>[] = [
        {
            title: 'ID',
            width: 100,
            dataIndex: 'uid',
            key: 'uid',
            fixed: 'left',
        },
        {
            title: '用户名',
            width: 100,
            dataIndex: 'username',
            key: 'username',
            fixed: 'left',
        },
        {
            title: '身份证号码',
            dataIndex: 'idnumber',
            key: '1',
            width: 150,
        },
        {
            title: '电话',
            dataIndex: 'phone',
            key: '2',
            width: 100,
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (o) => <Space>
                <Button type='primary' icon={<EditOutlined />} onClick = {() => { openModifyModal(o.uid,o.username,o.idnumber,o.phone) }}></Button>
                <Modal
                    title = "修改用户"
                    visible={modifyFlag}
                    onOk = {modifyConfirm}
                    onCancel = {modifyCancel}
                    mask = {false}
                >
                    <Form
                        labelCol = {{span: 6}}
                        wrapperCol = {{span: 16}}
                    >
                        <Form.Item  label="用户名">
                            <Input disabled value = {formValues.username}/>
                        </Form.Item>
                        <Form.Item  label="身份证号码">
                            <Input disabled value = {formValues.idnumber} />
                        </Form.Item>
                        <Form.Item  label="手机号"
                            rules = {[{required: true,pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/}]}
                        >
                            <Input  value = {formValues.phone}
                                onChange={ (e) => {
                                    setFormValues({
                                        username:formValues.username,
                                        idnumber:formValues.idnumber,
                                        phone:e.target.value
                                    })
                                }}
                            />
                        </Form.Item>
                    </Form>
                </Modal>
                <Popconfirm
                    title = "此操作将永久删除该用户, 是否继续?"
                    okText="确定"
                    cancelText="取消"
                    onConfirm = {() =>  {deleteUser(o.uid,o.username)}}
                    onCancel = {cancelDeleteUser}
                >
                    <Button type='primary' danger icon={<DeleteOutlined />}></Button>
                </Popconfirm>
            </Space>,
        },
    ];
    const [formValues,setFormValues] = useState({
        username:'',
        idnumber:'',
        phone:'',
    })
    const [modifyFlag,setModifyFlag] = useState(false)
    const [idInfo,setIdInfo]  = useState(0)
    const openModifyModal = (uid:number,username:string,idnumber:string,phone:string) => {
        setFormValues({
            username,
            idnumber,
            phone
        })
        setIdInfo(uid)
        setModifyFlag(true)
    }
    const closeModifyModal = () => {
        setModifyFlag(false)
    }
    const modifyCancel = () => {
        closeModifyModal()
    }
    const modifyConfirm = () => {
        const {phone} = formValues
        props.dispatch({
            type:'userList/modifyUserInfo',
            payload:{
                uid:+idInfo,
                phone:+phone
            }
        })
        // location.reload()   
        closeModifyModal()
    }

    const deleteUser = (uid:number,username:string) => {
        if(username == 'admin') {
            message.error('不能删除admin')
            return
        }
        props.dispatch({
            type:'userList/deleteUser',
            payload:+uid
        })
        message.success('删除成功')
    }
    const cancelDeleteUser = () => {
        message.info('已取消删除')
    }
    const modifyPage = (page:number):void => {
        props.dispatch({
            type:'userList/getUserList',
            payload:{
                page
            }
        })
    }
    useEffect(()=>{
        props.dispatch({
            type:'userList/getUserList',
            payload:{
                page:1
            }
        })
    },[])
    return (
        <div>
            <Table
                columns={columns}
                dataSource={props.list}
                scroll={{ x: 1300 }}
                pagination={{ 
                    position: ['bottomLeft'], 
                    total:props.totalPage*5,
                    defaultPageSize:5,
                    hideOnSinglePage:true,
                    onChange:modifyPage
                }}
            />
        </div>
    )
}

export default connect(
    ({userList}:{userList:UserStateType}) => userList
)(UserLIstTable)