import Breadcrumb from '@/components/MyBreadcrumb'
import React,{Fragment,useState} from 'react'
import styles from './Order.less'

import OrderListTable from './OrderLIstTable'

function orderList() {
    
    return (
        <Fragment>
            <Breadcrumb/>
            <div className={styles.order_list}>
                {/* 上部分 */}
                <div className={styles.search_box}>
                
                </div>
                {/* 下部分 */}
                <OrderListTable/>
            </div>
        </Fragment>
        
    )
}

export default orderList