import request from '@/utils/request'
import requests from '@/utils/requests'
import {AxiosResponse} from 'axios'

interface LoginDataType {
    username:string,
    password:string
}


export const loginreq = (data:LoginDataType):Promise<AxiosResponse<any>> => {
    return request({
        url:'login',
        method:'POST',
        data,
    })
}

export const userListReq = (data:{page:number}):Promise<AxiosResponse<any>> => {
    return requests({
        url:'page.php',
        data
    })
}

export const goodsListReq = (data:{page:number}):Promise<AxiosResponse<any>> => {
    return requests({
        url:'pagegoods.php',
        data
    })
}

export const orderListReq = (data:{page:number}):Promise<AxiosResponse<any>> => {
    return requests({
        url:'pageorder.php',
        data
    })
}


export const addUserReq = (data:{username:string,password:string,idnumber:string,phone:string}):Promise<AxiosResponse<any>> => {
    return requests({
        url:'adduser.php',
        method:'POST',
        data,  
    })    
}

export const addGoodsReq = (data:{url:string,title:string,price:string}):Promise<AxiosResponse<any>> => {
    return requests({
        url:'addgoods.php',
        method:'POST',
        data,  
    })    
}

export const deleteUserReq = (uid:number):Promise<AxiosResponse<any>> => {    
    return requests({
        url:`deleteuser.php?uid=${uid}`,
    })
}

export const deleteGoodsReq = (sid:number):Promise<AxiosResponse<any>> => {    
    return requests({
        url:`deletegoods.php?sid=${sid}`,
    })
}

export const selectUserReq = (username:string):Promise<AxiosResponse<any>> => {    
    return requests({
        url:`queryuser.php?username=${username}`,
    })
}

export const selectGoodsReq = (title:string):Promise<AxiosResponse<any>> => {    
    return requests({
        url:`querygoods.php?title=${title}`,
    })
}

export const selectUserIdReq = (uid:number):Promise<AxiosResponse<any>> => {    
    return requests({
        url:`selectuser.php?uid=${uid}`,
    })
}

export const modifyUserReq = ({uid,phone}:{uid:number,phone:number}) => {
    return requests({
        url:`modifyuser.php?uid=${uid}`,
        data:{
            phone
        }
    })
}

export const modifyGoodsReq = ({sid,price}:{sid:number,price:number}) => {
    return requests({
        url:`modifygoods.php?sid=${sid}`,
        data:{
            price
        }
    })
}