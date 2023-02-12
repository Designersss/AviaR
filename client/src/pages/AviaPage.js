import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {fetchOneAvia} from "../http/AviaApi";
import styled from '../styles/aviaPage.scss'
import {BUY_ROUTE, DEVICE_ROUTE, SHOP_ROUTE} from "../utils/consts";
import Buy from "./Buy";

const AviaPage = () => {
    const [avia, setAvia] = useState({info: []})
    const navigate = useNavigate()
    const {id} = useParams()
    console.log({id})
    useEffect(() => {
        fetchOneAvia(id).then(data => setAvia(data))
    }, [])
    return (
        <div className='container'>
            <div className='mt-10 pb-11 grid grid-cols-2 gap-x-16 max-[720px]:grid-cols-1'>
                <div className=''>
                    <span className='block text-3xl font-bold'>{avia.name}</span>
                    <span className='flex mt-10'>{avia.description}</span>
                </div>
                <div className=''>
                    <span className='text-xl'>Фотографии</span>
                    <div className='img-grid mt-10'>
                        <img className='imgOne' src={process.env.REACT_APP_API_URL + avia.imgOne} alt=""/>
                        <img className='imgTwo' src={process.env.REACT_APP_API_URL + avia.imgTwo} alt=""/>
                        <img className='imgThree' src={process.env.REACT_APP_API_URL + avia.imgThree} alt=""/>
                    </div>
                </div>
                <div className='relative w-52 mt-10'>
                    <span className='text-xl'>Информация</span>
                    <div className="flex mt-4">
                        <span>
                            {avia.information_from}
                        </span>
                        <svg className='ml-6' width="20" height="20" viewBox="0 0 492 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.4802 147.154C9.16954 147.154 0 156.324 0 167.634C0 178.945 9.16951 188.115 20.4802 188.115H471.041C482.351 188.115 491.521 178.945 491.521 167.634C491.521 156.324 482.351 147.154 471.041 147.154H20.4802Z" fill="#0A93E2"/>
                            <path d="M338.365 5.99782C330.368 -1.99927 317.402 -1.99927 309.405 5.99782C301.408 13.9949 301.408 26.961 309.405 34.9581L442.081 167.634L309.405 300.31C301.408 308.307 301.408 321.273 309.405 329.27C317.402 337.267 330.368 337.267 338.365 329.27L485.401 182.233L485.522 182.116C493.52 174.118 493.52 161.15 485.522 153.152L338.365 5.99782Z" fill="#0A93E2"/>
                        </svg>
                        <span className='absolute right-0'>
                            {avia.country}
                        </span>
                    </div>
                    <div className='flex relative mt-4'>
                        <span>Время вылета</span>
                        <span className='absolute right-0'>{avia.departure_time}:00</span>
                    </div>
                    <div className='flex relative mt-4'>
                        <span>В пути</span>
                        <span className='absolute right-0'>{avia.path_time}:00</span>
                    </div>
                </div>
                <div className='mt-10 relative'>
                    <span className='absolute right-0 text-xl underline max-[720px]:left-0'>Цена: {avia.price}$</span>
                    <button className="absolute right-0 bottom-0 text-lg mr-3 border-2 border-black pl-3 pr-3 pt-0.5 pb-0.5 rounded-lg hover:scale-105 transition max-[720px]:left-0 max-[720px]:-bottom-20" onClick={() => navigate(BUY_ROUTE + '/' + avia.id)}>Оформить</button>
                </div>
            </div>
        </div>
    );
};

export default AviaPage;