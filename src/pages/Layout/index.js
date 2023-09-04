import { useEffect } from 'react'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import { Layout, Menu, Popconfirm } from 'antd'
import './index.scss'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'

const { Header, Sider } = Layout

const SysLayout = () => {
  const location = useLocation()
  const selectedKey = location.pathname

  const store = useStore()
  // 获取用户数据
  useEffect(() => {
    store.userStore.getUserInfo()
  }, [store.userStore])

  // 退出
  const navigate = useNavigate()
  const onLogout = () => {
    store.loginStore.loginOut()
    navigate('/login')
  }
  
  return (
    <div>
      <Layout>
        <Header className='header'>
          <div className='logo'></div>
          <div className='user_info'>
            <span className='user_name'>{store.userStore.userInfo.mobile}</span>
            <span className="user_logout">
              <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={onLogout}>
                <LogoutOutlined /> 退出
              </Popconfirm>
            </span>
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site_layout_background">
            <Menu
              mode="inline"
              theme="dark"
              selectedKeys={[selectedKey]}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item icon={<HomeOutlined />} key="/">
                <Link to="/">数据概览</Link>
              </Menu.Item>
              <Menu.Item icon={<DiffOutlined />} key="/article">
                <Link to="/article">内容管理</Link>
              </Menu.Item>
              <Menu.Item icon={<EditOutlined />} key="/publish">
                <Link to="/publish">发布文章</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="layout-content" style={{ padding: 20 }}>
            <Outlet/>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}

export default observer(SysLayout)