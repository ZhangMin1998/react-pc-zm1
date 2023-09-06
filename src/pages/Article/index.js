import { Card, Breadcrumb, Form, Radio, Select, DatePicker, Button, Table, Tag, Space } from 'antd'
import { Link } from 'react-router-dom'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { http } from '@/utils'
import locale from 'antd/es/date-picker/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import './index.scss'
import { useEffect, useState } from 'react'

const { Option } = Select
const { RangePicker } = DatePicker

function Article () {
  // 筛选
  const onSearch = (values) => {
    console.log(values)
    const { status, channel_id, date } = values
    // 格式化表单数据
    const _params = {}
    // 格式化status
    _params.status = status
    if (channel_id) {
      _params.channel_id = channel_id
    }
    if (date) {
      _params.begin_pubdate = date[0].format('YYYY-MM-DD')
      _params.end_pubdate = date[1].format('YYYY-MM-DD')
    }
    // 修改params参数 触发接口再次发起
    setParams({
       ...params,
       ..._params
    })
  }
  // 获取频道列表
  const [channels, setChannels] = useState([])
  useEffect(() => {
    async function fetchChannels() {
      const res = await http.get('/channels')
      setChannels(res.data.data.channels)
    }
    fetchChannels()
  }, [])

  // 文章列表数据管理
  const [article, setArticleList] = useState({
    list: [],
    count: 0
  })
  // 参数管理
  const [params, setParams] = useState({
    page: 1,
    per_page: 10
  })
  // 获取文章列表
  useEffect(() => {
    async function fetchArticleList() {
      const res = await http.get('/mp/articles', { params })
      // console.log(res)
      setArticleList({
        list: res.data.data.results,
        count: res.data.data.total_count
      })
    }
    fetchArticleList()
  }, [params])
  
  const img404 = 'https://img-blog.csdnimg.cn/e9f21a8179be4e6db55535ccfa55d0e6.png'
  const data = [
    {
      id: '8218',
      comment_count: 0,
      cover: {
        images:['http://geek.itheima.net/resources/images/15.jpg'],
      },
      like_count: 0,
      pubdate: '2019-03-11 09:00:00',
      read_count: 2,
      status: 2,
      title: 'wkwebview离线化加载h5资源解决方案' 
    }
  ]
  const columns = [
    {
      title: '封面',
      dataIndex: 'cover',
      width:120,
      render: cover => {
        return <img src={cover.images || img404} width={80} height={60} alt="" />
      }
    },
    {
      title: '标题',
      dataIndex: 'title',
      width: 220
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: data => <Tag color="green">审核通过</Tag>
    },
    {
      title: '发布时间',
      dataIndex: 'pubdate'
    },
    {
      title: '阅读数',
      dataIndex: 'read_count'
    },
    {
      title: '评论数',
      dataIndex: 'comment_count'
    },
    {
      title: '点赞数',
      dataIndex: 'like_count'
    },
    {
      title: '操作',
      render: data => {
        return (
          <Space size="middle">
            <Button type="primary" shape="circle" icon={<EditOutlined />} />
            <Button
              type="primary"
              danger
              shape="circle"
              icon={<DeleteOutlined />}
            />
          </Space>
        )
      }
    }
  ]

  return (
    <div>
      <Card
        title={
          <Breadcrumb
            separator=">"
            items={[
              {
                title: <Link to="/">首页</Link>,
              },
              {
                title: '内容管理',
              }
              // {
              //   title: <a href="/">首页</a>,
              // },
            ]}
          >
            {/* <Breadcrumb.Item>
              <Link to="/">首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>内容管理</Breadcrumb.Item> */}
          </Breadcrumb>
        }
        style={{ marginBottom: 20 }}
      >
        <Form 
          onFinish={onSearch}
          initialValues={{ status: 4 }}
        >
          <Form.Item label="状态" name="status">
            <Radio.Group>
              <Radio value={4}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={1}>待审核</Radio>
              <Radio value={2}>审核通过</Radio>
              <Radio value={3}>审核失败</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="频道" name="channel_id">
            <Select
              placeholder="请选择文章频道"
              style={{ width: 200 }}
            >
              {
                channels.map(item => (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                ))
              }
            </Select>
          </Form.Item>

          <Form.Item label="日期" name="date">
            {/* 传入locale属性 控制中文显示*/}
            <RangePicker locale={locale}></RangePicker>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 40 }}>
              筛选
            </Button>
          </Form.Item>

        </Form>

      </Card>

      <Card title={`根据筛选条件共查询到 count 条结果：`}>
        <Table rowKey="id" columns={columns} dataSource={data} />
      </Card>
      
    </div>
  )
}

export default Article