import React, {useContext, useState} from 'react';
import {Link, redirect, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userApi";
import {Button, Card, Container, Form} from "react-bootstrap";
import {observer} from "mobx-react";
import {Context} from "../index";
import styled from '../styles/auth.scss'

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(email, password)
                console.log(data)
            } else {
                data = await registration(email, password)
                console.log(data)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(MAIN_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div className='container flex justify-center'>
            <div className='pt-52 w-96'>
                <h2 className='flex justify-center mb-8 text-2xl'>{isLogin ? 'Вход' : 'Регистрация'}</h2>
                <Form className='justify-center relative'>
                    <Form.Control className='block w-full border-2 border-black rounded-lg pl-2 pr-2 pt-1 pb-1 mt-4' value={email}
                                  onChange={e => setEmail(e.target.value)}
                                  placeholder='Введите вашу почту'/>
                    <Form.Control className='block w-full outline-0 border-2 border-black rounded-lg pl-2 pr-2 pt-1 pb-1 mt-4'
                                  value={password} onChange={e => setPassword(e.target.value)}
                                  placeholder='Введите ваш пароль'/>
                    {isLogin ?
                        <div className='flex absolute right-0 mt-6'>Нет аккаунта? <Link className='ml-4 underline'
                                                                                        to={REGISTRATION_ROUTE}>Регистрация</Link>
                        </div>
                        :
                        <div className='flex absolute right-0 mt-6'>Есть аккаунт? <Link className='ml-4 underline'
                                                                                        to={LOGIN_ROUTE}>Вход</Link>
                        </div>
                    }
                    <Button className='button' onClick={click}>{isLogin ? 'Вход' : 'Регистрация'}</Button>
                </Form>
            </div>
        </div>
    );
});

export default Auth;