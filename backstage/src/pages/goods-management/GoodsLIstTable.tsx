import React,{useEffect,useState} from 'react'
import { Table, TableColumnType,Switch,Button,Space,message,Modal,Popconfirm,Form,Input } from 'antd';
import {connect} from 'umi'
import {GoodsStateType} from'./model'
import {EditOutlined,DeleteOutlined,SettingOutlined} from '@ant-design/icons'

function GoodsLIstTable(props:any) {
    const columns: TableColumnType<any>[] = [
        {
            title: 'ID',
            width: 100,
            dataIndex: 'sid',
            key: 'sid',
            fixed: 'left',
        },
        {
            title: '图片',
            width: 100,
            dataIndex: 'url',
            key: 'url',
            fixed: 'left',
            render: (record) => 
            //   console.log("record的内容",record)
            <img src={record} width="100px" alt=""/> 
            , 
        },
        {
            title: '商品名称',
            dataIndex: 'title',
            key: '1',
            width: 150,
        },
        {
            title: '商品价格',
            dataIndex: 'price',
            key: '2',
            width: 100,
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (o) => <Space>
                <Button type='primary' icon={<EditOutlined />} onClick = {() => { openModifyModal(o.sid,o.url,o.title,o.price) }}></Button>
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
                        <Form.Item  label="商品图片地址">
                            <Input disabled value = {formValues.url}/>
                        </Form.Item>
                        <Form.Item  label="商品名称">
                            <Input disabled value = {formValues.title} />
                        </Form.Item>
                        <Form.Item  label="商品价格"
                            rules = {[{required: true,pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/}]}
                        >
                            <Input  value = {formValues.price}
                                onChange={ (e) => {
                                    setFormValues({
                                        url:formValues.url,
                                        title:formValues.title,
                                        price:e.target.value
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
                    onConfirm = {() =>  {deleteUser(o.sid)}}
                    onCancel = {cancelDeleteUser}
                >
                    <Button type='primary' danger icon={<DeleteOutlined />}></Button>
                </Popconfirm>
            </Space>,
        },
    ];
    const [formValues,setFormValues] = useState({
        url:'',
        title:'',
        price:'',
    })
    const [modifyFlag,setModifyFlag] = useState(false)
    const [idInfo,setIdInfo]  = useState(0)
    const openModifyModal = (sid:number,url:string,title:string,price:string) => {
        setFormValues({
            url,
            title,
            price
        })
        setIdInfo(sid)
        setModifyFlag(true)
    }
    const closeModifyModal = () => {
        setModifyFlag(false)
    }
    const modifyCancel = () => {
        closeModifyModal()
    }
    const modifyConfirm = () => {
        const {price} = formValues
        props.dispatch({
            type:'goodsList/modifyGoodsInfo',
            payload:{
                sid:+idInfo,
                price:+price
            }
        })
        // location.reload()   
        closeModifyModal()
    }

    const deleteUser = (sid:number) => {
        props.dispatch({
            type:'goodsList/deleteGoods',
            payload:+sid
        })
        message.success('删除成功')
    }
    const cancelDeleteUser = () => {
        message.info('已取消删除')
    }
    const modifyPage = (page:number):void => {
        props.dispatch({
            type:'goodsList/getGoodsList',
            payload:{
                page
            }
        })
    }
    useEffect(()=>{
        props.dispatch({
            type:'goodsList/getGoodsList',
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
    ({goodsList}:{goodsList:GoodsStateType}) => goodsList
)(GoodsLIstTable)