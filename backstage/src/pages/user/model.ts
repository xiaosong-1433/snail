import { loginreq } from '@/services'
import {Effect, ImmerReducer, Subscription,history} from 'umi'
import {setCookie} from '@/utils/cookie'
import {message} from 'antd'

export interface userStateType {

}

export interface userModelType {
    namespace:'user',
    state:userStateType,
    effects:{
        login:Effect
    },
    reducers:{
        LOGIN:ImmerReducer
    },
    subscriptions:{
        setup:Subscription
    }
}

const userModel:userModelType = {
    namespace:'user',
    state:{

    },
    effects:{
        *login({payload},{call,put}){
            const r = yield call(loginreq,payload)
            
            if(r.meta.status == 400){
                message.error(r.meta.msg)
                return
            }
            setCookie('email',r.data.email,7)
            setCookie('id',r.data.id,7)
            setCookie('mobile',r.data.mobile,7)
            setCookie('rid',r.data.rid,7)
            setCookie('token',r.data.token,7)
            setCookie('username',r.data.username,7)
            history.push('/')
            put({
                type:'LOGIN'
            })
        }
    },
    reducers:{
        LOGIN(){}
    },
    subscriptions:{
        setup(){}
    }
}

export default userModel