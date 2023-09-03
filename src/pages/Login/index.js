import { Card, Form, Input, Button, Checkbox } from 'antd'
import logo from '@/assets/image/logo.png'
import './index.scss'

const Login = () => {
  return (
    <div className='login'>
      <Card className='login_container'>
        <img className='login_logo' src={logo} alt='logo' />
        <Form
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item>
            <Input size="large" placeholder='请输入手机号' />
          </Form.Item>
          <Form.Item>
            <Input size="large" placeholder='请输入验证码' />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox className='login_checkbox_label'>
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type='primary' size='large' htmlType='submit' block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login