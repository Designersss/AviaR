import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";
import styled from '../styles/aviaItem.scss'
const AviaItem = ({avia}) => {
    const navigate = useNavigate()
    return (
        <button className='list' onClick={() => navigate(DEVICE_ROUTE + '/' + avia.id)}>
            <img className='max-[1100px]:flex max-[1100px]:mx-auto' src={process.env.REACT_APP_API_URL + avia.imgOne} alt=""/>
            <div className='mt-3'>{avia.name}</div>
            <hr className='flex mt-2 mb-2'/>
            <div className="flex mb-4">Цена: {avia.price}$</div>
            <div className="flex">
                {avia.information_from}
                <svg className='ml-4 mr-4' width="20" height="20" viewBox="0 0 492 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.4802 147.154C9.16954 147.154 0 156.324 0 167.634C0 178.945 9.16951 188.115 20.4802 188.115H471.041C482.351 188.115 491.521 178.945 491.521 167.634C491.521 156.324 482.351 147.154 471.041 147.154H20.4802Z" fill="#0A93E2"/>
                    <path d="M338.365 5.99782C330.368 -1.99927 317.402 -1.99927 309.405 5.99782C301.408 13.9949 301.408 26.961 309.405 34.9581L442.081 167.634L309.405 300.31C301.408 308.307 301.408 321.273 309.405 329.27C317.402 337.267 330.368 337.267 338.365 329.27L485.401 182.233L485.522 182.116C493.52 174.118 493.52 161.15 485.522 153.152L338.365 5.99782Z" fill="#0A93E2"/>
                </svg>
                {avia.country}
            </div>
        </button>
    );
};

export default AviaItem;