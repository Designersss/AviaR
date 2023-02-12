import React from 'react';
import {useNavigate} from "react-router-dom";
import {CREATE_AVIA_ROUTE, CREATE_COUNTRY_ROUTE} from "../utils/consts";
import styled from '../styles/admin.scss'
const Admin = () => {

    const navigate = useNavigate()
    const cont = () => {
        navigate(CREATE_COUNTRY_ROUTE)
    }

    const tick = () => {
        navigate(CREATE_AVIA_ROUTE)
    }

    return (
        <div className='container'>
            <div className='grid grid-cols-2 gap-8 mt-10'>
                <button className='addCounter' onClick={cont}>Добавить страну</button>
                <button className='addCounter' onClick={tick}>Добавить путевку</button>
            </div>
        </div>
    );
};

export default Admin;