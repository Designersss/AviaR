import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react";
import {useNavigate, useParams} from "react-router-dom";
import {fetchOneAvia} from "../http/AviaApi";
import {MAIN_ROUTE} from "../utils/consts";

const Buy =  observer (() => {
    const [avia, setAvia] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()
    console.log(avia)
    useEffect(() => {
        fetchOneAvia(id).then(data => setAvia(data))
    }, [])
    return (
        <div className='container'>
            <h2 className='flex justify-center mt-20 text-2xl'>Оплата путевки</h2>
            <div className='flex justify-center mt-20'>
                <div className='block shadow-2xl px-5 py-3 w-96 min-[320px]:text-center'>
                    <span className='block mt-8'>Название: {avia.name}</span>
                    <span className='block mt-8'>К оплате: {avia.price}$</span>
                    <input className='block mt-8' type="text" placeholder='0000 0000 0000 0000'/>
                    <button className='button' onClick={() => navigate(MAIN_ROUTE)}>Оплатить {avia.price}$</button>
                </div>
            </div>
        </div>
    );
});

export default Buy;