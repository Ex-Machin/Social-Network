import React from 'react';
import s from "./Header.module.css";
import { logout } from '../../redux/auth-reducer';
import { UserOutlined } from '@ant-design/icons';
import { AppStateType } from '../../redux/redux-store';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Button } from 'antd';
import { Avatar } from 'antd';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/bird_2.jpg";

const Header: React.FC = () => {
    const { Header } = Layout;

    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const login = useSelector((state: AppStateType) => state.auth.login)

    const dispatch: ThunkDispatch<AppStateType, unknown, AnyAction> = useDispatch()

    return (
        <Header className={s.header}>
            <img className='logo' src={logo} alt="" height='40px' width='40px' />
            <div className={s.loginBlock}>
                {isAuth ? (
                    <>
                        <div title={login || ''}>
                            <Avatar style={{ marginRight: "20px"}} shape="square" size="small" icon={<UserOutlined />} />
                        </div>
                        <Button type="primary" onClick={() => dispatch(logout())}>Logout</Button>
                    </>
                ) : (
                    <Button type='primary'>
                        <Link to={"/login"}>Login </Link>
                    </Button>
                )}
            </div>
        </Header>
    );
};

export default Header;