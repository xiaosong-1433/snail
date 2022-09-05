import Breadcrumb from '@/components/MyBreadcrumb'
import React,{Fragment,useState} from 'react'
import styles from './goods.less'
import {Space,Button,Input,Modal,Form} from 'antd'
import GoodsListTable from './GoodsLIstTable'
import { connect } from 'umi'
import {GoodsStateType} from'./model'
const { Search } = Input;
function goodsList(props:any) {
    const [flag,setFlag] = useState(false)
    const [formValues,setFormValues] = useState({
        url:'',
        title:'',
        price:'',
    })
    const [form] = Form.useForm()
    const onSearch = (values:string):void => {
        props.dispatch({
            type:'goodsList/selectGoods',
            payload:values
        })
    }
    const open = () => {
        setFlag(true)
    }
    const handleOk = () => {
        props.dispatch({
            type:'goodsList/addGoods',
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
            <div className={styles.goods_list}>
                {/* 上部分 */}
                <div className={styles.search_box}>
                <Space size={15}>
                    <Search
                    placeholder="请输入商品名称"
                    onSearch={onSearch}
                    enterButton
                    />
                    <Button type="primary" onClick = {open}>
                    {' '}
                    添加商品{' '}
                    </Button>
                    <Modal title='添加商品' visible={flag} onOk={handleOk} onCancel={handleCancel}>
                        <Form
                            labelCol= { {span: 6} }
                            wrapperCol= { {span: 16} }
                            onValuesChange={getValues}
                            form = {form}
                        >
                            <Form.Item
                                label="商品图片地址"
                                name="url"
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="商品名称"
                                name="title"
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="商品价格"
                                name="price"
                            >
                                <Input/>
                            </Form.Item>
                        </Form>
                    </Modal>
                </Space>
                </div>
                {/* 下部分 */}
                <GoodsListTable/>
            </div>
        </Fragment>
    )
}

export default connect(
    ({goodsList}:{goodsList:GoodsStateType}) => goodsList
)(goodsList)
