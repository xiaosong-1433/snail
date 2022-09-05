import React,{useEffect,useState} from 'react'
import { Table, TableColumnType,Switch,Button,Space,message,Modal,Popconfirm,Form,Input } from 'antd';
import {connect} from 'umi'
import {OrderStateType} from'./model'
import {EditOutlined,DeleteOutlined,SettingOutlined} from '@ant-design/icons'

function OrderListTable(props:any) {
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
            title: '用户名称',
            dataIndex: 'username',
            key: '1',
            width: 150,
        },
        {
            title: '商品名称',
            dataIndex: 'title',
            key: '2',
            width: 150,
        },
        {
            title: '商品数量',
            dataIndex: 'quantity',
            key: '3',
            width: 100,
        },
       
    ];
    
    const modifyPage = (page:number):void => {
        props.dispatch({
            type:'orderList/getOrderList',
            payload:{
                page
            }
        })
    }
    useEffect(()=>{
        props.dispatch({
            type:'orderList/getOrderList',
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
    ({orderList}:{orderList:OrderStateType}) => orderList
)(OrderListTable)