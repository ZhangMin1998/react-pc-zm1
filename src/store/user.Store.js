import {  makeAutoObservable } from 'mobx'
import { http } from '@/utils'

class UserStore {
  userInfo = {}
  constructor () {
    makeAutoObservable(this)
  }

  getUserInfo = async () => {
    try {
      const res = await http.get('/user/profile')
      this.userInfo = res.data.data
    }catch(err) {
      console.log(err)
    }
  }
  
}

export default UserStore