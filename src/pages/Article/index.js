import { Card, Breadcrumb, Form, Radio, Select, DatePicker, Button } from 'antd'
import { Link } from 'react-router-dom'
import locale from 'antd/es/date-picker/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import './index.scss'

const { Option } = Select
const { RangePicker } = DatePicker

function Article () {
  const onFinish = (values) => {
    console.log(values)
  }
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
          onFinish={onFinish}
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
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
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
    </div>
  )
}

export default Article