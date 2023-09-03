import {  makeAutoObservable } from 'mobx'
import { http } from '@/utils'

class LoginStore {
  token = ''
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
  }
}

export default LoginStore