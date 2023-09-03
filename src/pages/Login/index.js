import { Card, Form, Input, Button, Checkbox } from 'antd'
import logo from '@/assets/image/logo.png'
import './index.scss'

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className='login'>
      <Card className='login_container'>
        <img className='login_logo' src={logo} alt='logo' />
        {/* 子项用到的触发事件，需要在Form声明 */}
        <Form
          initialValues={{
            mobile: '13222222222',
            code: '000000',
            remember: true,
          }}
          validateTrigger={['onBlur', 'onChange']}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="mobile"
            rules={[
              {
                required: true, message: '请输入手机号'
              },
              {
                pattern: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/,
                message: '手机号码格式不对',
                validateTrigger: 'onBlur'
              }
            ]}  
          >
            <Input size="large" placeholder='请输入手机号' />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              { len: 6, message: '验证码6位字符', validateTrigger: 'onBlur' },
              { required: true, message: '请输入验证码' }
            ]}
          >
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