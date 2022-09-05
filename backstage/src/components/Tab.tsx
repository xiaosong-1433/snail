import React from 'react'
import {Button} from 'antd'
import {getCookie,removeCookie} from '@/utils/cookie'
import {history} from 'umi'

export default function Tab() {
    const username = getCookie('username')
    const Quit = () => {
        history.push('/login')
        removeCookie('username')
        removeCookie('token')
        removeCookie('email')
        removeCookie('id')
        removeCookie('rid')
        removeCookie('mobile')
    }
    return (
        <div>
            当前操作用户：{username} <Button onClick={Quit}>退出</Button>
        </div>
    )
}
