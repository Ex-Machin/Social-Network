import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from 'redux-thunk';
import "./App.css";

import Music from "./components/Music/Music";
import News from "./components/News/News";
import Preloader from "./components/Preloader/Preloader";
import Settings from "./components/Settings/Settings";
import { initialize } from "./redux/app-reducer";
import { AppStateType } from "./redux/redux-store";
import Header from './components/Header/Header';
import { Footer } from 'antd/lib/layout/layout';

const { Content, Sider } = Layout;

const items = [
  {
    icon: UserOutlined,
    label: <Link to="/profile">Profile</Link>
  },
  {
    icon: LaptopOutlined,
    label: <Link to="/dialogs">Dialogs</Link>
  },
  {
    icon: NotificationOutlined,
    label: <Link to="/news">News</Link>
  },
  {
    icon: UserOutlined,
    label: <Link to="/users">Users</Link>
  },
  {
    icon: UserOutlined,
    label: <Link to="/music">Music</Link>
  },
  {
    icon: UserOutlined,
    label: <Link to="/settings">Settings</Link>
  }
]

const items2: MenuProps['items'] = items.map((item, index) => {
  return {
    key: index,
    icon: React.createElement(item.icon),
    label: item.label,
  };
},
);

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfilePage = React.lazy(() => import("./components/Profile/ProfilePage"));
const LoginPage = React.lazy(() => import("./components/Login/Login"));
const UsersPage = React.lazy(() => import("./components/Users/UsersPage"));

export const App: React.FC = () => {

  const catchAllUnhandledErrors = () => {
    alert("Some error occured")
  }
  const dispatch: ThunkDispatch<AppStateType, unknown, AnyAction> = useDispatch()

  useEffect(() => {
    dispatch(initialize())
    window.addEventListener("unhandledrejection", catchAllUnhandledErrors);
  }, [dispatch])

  useEffect(() => () => {
    window.removeEventListener("unhandledrejection", catchAllUnhandledErrors);
  }, [])

  const isInitialized = useSelector((state: AppStateType) => state.app.initialized)


  return isInitialized ? (
    <Layout>
      <Header />
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <div className="app-wrapper-content">
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<ProfilePage />} />
                  <Route path="/dialogs" element={<DialogsContainer />} />
                  <Route path="/profile/:id" element={<ProfilePage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/music" element={<Music />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/users" element={<UsersPage pageTitle="Каничива" />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="*" element={<div>Not Found</div>} />
                </Routes>
              </Suspense>
            </div>
          </Content>
        </Layout>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Social Network @ 2025 Created by Ex-Machin</Footer>
    </Layout>
  ) : <Preloader />
}