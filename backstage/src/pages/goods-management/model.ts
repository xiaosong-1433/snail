import {Effect,ImmerReducer} from 'umi'
import { message } from 'antd'
import * as services from '@/services'
interface GoodsItemType {
    readonly id:number,
    url:string,
    title:string,
    price:number,
}


export interface GoodsStateType {
    list:GoodsItemType[],
    totalPage:number,
}

interface GoodsListType {
    namespace:'goodsList',
    state:GoodsStateType,
    effects:{
        getGoodsList:Effect,
        addGoods:Effect,
        deleteGoods:Effect,
        selectGoods:Effect,
        modifyGoodsInfo:Effect,
    }
    reducers:{
        GET_GOODS_LIST:ImmerReducer,
        ADD_GOODS:ImmerReducer,
        DELETE_GOODS:ImmerReducer,
        SELECT_GOODS:ImmerReducer,
        MODIFY_GOODS_INFO:ImmerReducer,
    }
}

const goodsListModel:GoodsListType = {
    namespace : 'goodsList',
    state:{
        list:[],
        totalPage:1,
    },
    effects:{
        *getGoodsList({payload},{call,put}){
            yield put({
                type:'GET_GOODS_LIST',
                payload: yield call(services.goodsListReq,payload)
            })
        },
        *addGoods ({payload},{call,put}) {
            const r = yield call(services.addGoodsReq,payload)     
            yield put({
                type: 'ADD_GOODS',
                payload: payload
            })
        },
        *deleteGoods ({payload},{call,put}) {
            const r = yield call(services.deleteGoodsReq,payload)  
            yield put({
                type:'DELETE_GOODS',
                payload
            })
        },
        *selectGoods ({payload},{call,put}) {
            const r = yield call(services.selectGoodsReq,payload)  
            yield put({
                type:'SELECT_GOODS',
                payload
            })
        },


        *modifyGoodsInfo({payload},{call,put}){
            const r = yield call (services.modifyGoodsReq,payload)
            yield put({
                type:'MODIFY_GOODS_INFO',
                payload:payload
            })            
        }
    },
    reducers:{
        // {pagedata,pageon}
        GET_GOODS_LIST (state,{payload}) {
            state.list = payload.pagedata
            state.totalPage = payload.pageno
            
        },
        ADD_GOODS (state,payload) {          
            state.list.push(payload)
        },
        DELETE_GOODS (state,{payload}) {
            state.list = state.list.filter((v:any) => v.sid != payload)
        },
        SELECT_GOODS (state,{payload}) {
            state.list = state.list.filter((v:any) => v.title == payload)
        },
        MODIFY_GOODS_INFO (state,{payload}) {
            state.list.forEach((item:any) => {
                if(item.sid == payload.sid){
                    item.price = payload.price
                }
            })    
        }
    }
}

export default goodsListModel