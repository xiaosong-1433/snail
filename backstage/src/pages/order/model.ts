import {Effect,ImmerReducer} from 'umi'
import * as services from '@/services'
interface OrderItemType {
    readonly id:number,
    url:string,
    username:string
    title:string,
    num:number,
}


export interface OrderStateType {
    list:OrderItemType[],
    totalPage:number,
}

interface OrderListType {
    namespace:'orderList',
    state:OrderStateType,
    effects:{
        getOrderList:Effect,
    }
    reducers:{
        GET_ORDER_LIST:ImmerReducer,
    }
}

const orderListModel:OrderListType = {
    namespace : 'orderList',
    state:{
        list:[],
        totalPage:1,
    },
    effects:{
        *getOrderList({payload},{call,put}){
            yield put({
                type:'GET_ORDER_LIST',
                payload: yield call(services.orderListReq,payload)
            })
        },
    },
    reducers:{
        // {pagedata,pageon}
        GET_ORDER_LIST (state,{payload}) {
            state.list = payload.pagedata
            state.totalPage = payload.pageno
            
        },
    }
}

export default orderListModel