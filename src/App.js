// 导入路由
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import AuthRoute from './components/AuthRoute'

// 导入页面组件
import Login from './pages/Login'
import SysLayout from '@/pages/Layout'
import Home from './pages/Home'
import Article from './pages/Article'
import Publish from './pages/Publish'

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
          >
            <Route index element={<Home />}/>
            <Route path="/article" element={<Article />} />
            <Route path="/publish" element={<Publish />} />
          </Route>

          {/* 不需要鉴权的路由 */}
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
