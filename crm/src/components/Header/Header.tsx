import {Button, Menu} from 'antd';
import {UserOutlined, DollarCircleOutlined} from '@ant-design/icons';
import React from 'react';
import {Link} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";


const Header: React.FC = () => {
    const {logout} = useAuth()
    return (

        <div className={'header'}>
            <Menu mode="horizontal">
                <Menu.Item key="orders" icon={<DollarCircleOutlined/>}>
                    <Link to="/">Заявки</Link>
                </Menu.Item>
                <Menu.Item key="employees" icon={<UserOutlined/>}>
                    <Link to="/employees">Сотрудники</Link>
                </Menu.Item>

            </Menu>
            <Button onClick={logout} type="primary">Выход</Button>
        </div>


    );
};

export default Header;