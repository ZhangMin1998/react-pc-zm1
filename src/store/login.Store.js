import {  makeAutoObservable } from 'mobx'
import { http, setToken, getToken } from '@/utils'

class LoginStore {
  token = getToken() || ''
  constructor () {
    makeAutoObservable(this)
  }

  // 登录
  login = async ({mobile, code}) => {
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile,
      code
    })
    console.log(res, res.data.data.token)
    this.token = res.data.data.token
    setToken(res.data.data.token)
  }
}

export default LoginStore