import React, {useState} from 'react';
import {createDevice} from "../http/AviaApi";
import {useNavigate} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";

const CreateCountry = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const addCountry = () => {
        createDevice({name: value}).then(data => {
            setValue('')
            navigate(SHOP_ROUTE)
        })
    }
    return (
        <div className='flex justify-center items-center h-96'>
            <div className='w-96'>
                <input className='w-full border-2 border-black pl-3 pr-3 pt-0.5 pb-0.5 rounded-lg' type="text" placeholder='Введите страну, которую хотите добавить' value={value} onChange={e => setValue(e.target.value)}/>
                <button className='addCounter mt-8 w-full' onClick={addCountry}>Добавить страну</button>
            </div>
        </div>
    );
};

export default CreateCountry;