import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import { Layout, Menu, Popconfirm } from 'antd'
import './index.scss'
import { Outlet, Link, useLocation } from 'react-router-dom'

const { Header, Sider } = Layout

function sysLayout () {
  const location = useLocation
  // console.log('location', location())
  const selectedKey = location().pathname
  
  return (
    <div>
      <Layout>
        <Header className='header'>
          <div className='logo'></div>
          <div className='user_info'>
            <span className='user_name'>user.name</span>
            <span className="user_logout">
              <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
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

export default sysLayout