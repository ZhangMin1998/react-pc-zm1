import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

function Home () {
  const domRef = useRef()

  const initChart = () => {
    const mychart = echarts.init(domRef.current)
  
    mychart.setOption({
      title: {
        text: '三大框架满意度'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '牛仔裤', '毛衣', '丝袜']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10]
        }
      ]
    })
  }
  useEffect(() => {
    initChart()
  }, [])

  return (
    <div ref={domRef} style={{width: '500px', height: '400px'}}></div>
  )
}

export default Home