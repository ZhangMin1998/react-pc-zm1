// 导入路由
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// 导入页面组件
import Login from './pages/Login'
import SysLayout from '@/pages/Layout'
import AuthRoute from './components/AuthRoute'

// 配置路由规则
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 需要鉴权的路由 */}
          <Route
            path="/"
            element={
              <AuthRoute>
                <SysLayout/>
              </AuthRoute>
            }
          />

          {/* 不需要鉴权的路由 */}
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
