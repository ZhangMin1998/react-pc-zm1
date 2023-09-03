import { Card } from 'antd'
import logo from '@/assets/image/logo.png'
import './index.scss'

const Login = () => {
  return (
    <div className='login'>
      <Card className='login_container'>
        <img className='login_logo' src={logo} alt='logo' />
      </Card>
    </div>
  )
}

export default Login