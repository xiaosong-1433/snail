import {Effect,ImmerReducer} from 'umi'
import { message } from 'antd'
import * as services from '@/services'
interface UserItemType {
    readonly id:number,
    username:string,
    idnumber:number,
    phone:number,
}


export interface UserStateType {
    list:UserItemType[],
    totalPage:number,
}

interface UserListType {
    namespace:'userList',
    state:UserStateType,
    effects:{
        getUserList:Effect,
        addUser:Effect,
        deleteUser:Effect,
        selectUser:Effect,
        modifyUserInfo:Effect,
    }
    reducers:{
        GET_USER_LIST:ImmerReducer,
        ADD_USER:ImmerReducer,
        DELETE_USER:ImmerReducer,
        SELECT_USER:ImmerReducer,
        MODIFY_USER_INFO:ImmerReducer,
    }
}

const userListModel:UserListType = {
    namespace : 'userList',
    state:{
        list:[],
        totalPage:1,
    },
    effects:{
        *getUserList({payload},{call,put}){
            yield put({
                type:'GET_USER_LIST',
                payload: yield call(services.userListReq,payload)
            })
        },
        *addUser ({payload},{call,put}) {
            const r = yield call(services.addUserReq,payload)     
            yield put({
                type: 'ADD_USER',
                payload: payload
            })
        },
        *deleteUser ({payload},{call,put}) {
            const r = yield call(services.deleteUserReq,payload)  
            yield put({
                type:'DELETE_USER',
                payload
            })
        },
        *selectUser ({payload},{call,put}) {
            const r = yield call(services.selectUserReq,payload)  
            yield put({
                type:'SELECT_USER',
                payload
            })
        },


        *modifyUserInfo({payload},{call,put}){
            const r = yield call (services.modifyUserReq,payload)
            yield put({
                type:'MODIFY_USER_INFO',
                payload:payload
            })            
        }
    },
    reducers:{
        // {pagedata,pageon}
        GET_USER_LIST (state,{payload}) {
            state.list = payload.pagedata
            state.totalPage = payload.pageno
        },
        ADD_USER (state,{payload}) {          
            state.list.push(payload)
            
        },
        DELETE_USER (state,{payload}) {
            state.list = state.list.filter((v:any) => v.uid != payload)
        },
        SELECT_USER (state,{payload}) {
            state.list = state.list.filter((v:any) => v.username == payload)
        },
        MODIFY_USER_INFO (state,{payload}) {
            state.list.forEach((item:any) => {
                if(item.uid == payload.uid){
                    item.phone = payload.phone
                }
            })    
        }
    }
}

export default userListModel