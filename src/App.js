// 导入路由
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom'
import { history } from './utils/history'
import './App.css'

import AuthRoute from './components/AuthRoute'

// 导入页面组件
// import Login from './pages/Login'
// import SysLayout from '@/pages/Layout'
// import Home from './pages/Home'
// import Article from './pages/Article'
// import Publish from './pages/Publish'

// 导入必要组件
import { lazy, Suspense } from 'react'
// 按需导入路由组件
const Login = lazy(() => import('./pages/Login'))
const SysLayout = lazy(() => import('@/pages/Layout'))
const Home = lazy(() => import('./pages/Home'))
const Article = lazy(() => import('./pages/Article'))
const Publish = lazy(() => import('./pages/Publish'))

// 配置路由规则
function App() {
  return (
    <HistoryRouter history={history}>
      <Suspense
        fallback={
          <div
            style={{
              textAlign: 'center',
              marginTop: 200
            }}
          >
            loading...
          </div>
        }
      >
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
      </Suspense>
    </HistoryRouter>
  )
}

export default App;
