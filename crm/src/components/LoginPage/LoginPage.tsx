import {Button, Form, Input} from 'antd';
import React from 'react'
import {AuthDataDto} from "../../common/dto/AuthDataDto";
import {useAuth} from "../../contexts/AuthContext";

interface LoginPageProps {

}



const LoginPage = (props: LoginPageProps) => {
    const {login} = useAuth()
    const onFinish = () => {

    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className={'login-page'}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={login}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Имя пользователя"
                    name="userName"
                    rules={[
                        {required: true, message: 'Пожалуйста введите имя пользователя!',},
                    ]}
                >
                    <Input autoComplete="off"/>
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                        {required: true, message: 'Пожалуйста введите пароль!',},
                    ]}
                >
                    <Input.Password autoComplete="off"/>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Вход
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginPage;

