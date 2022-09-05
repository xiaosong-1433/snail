import React,{useEffect,useState} from 'react'
import {Breadcrumb} from 'antd'
import {Link,useLocation} from 'umi'
import styles from './MyBreadcrumb.less'

export default function MyBreadcrumb() {
    const [title,setTitle] = useState('')
    const [subTitle,setSubTitle] = useState('')
    const {pathname} = useLocation()
    const state:any = {
        '/user/list':{
            title:'用户管理',
            subTitle:'用户列表'
        },
        '/goods/goods':{
            title:'商品管理',
            subTitle:'商品列表'
        },
        '/order/order':{
            title:'订单管理',
            subTitle:'订单列表'
        },
    }
    useEffect(()=>{
        for(let key in state){
            if(key === pathname){
                setTitle(state[key].title)
                setSubTitle(state[key].subTitle)
            }
        }
    })

    return (
        <div className={styles.breadcrumb_container}>
            <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>
                    {title}
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to={pathname}>{subTitle}</Link>
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}
