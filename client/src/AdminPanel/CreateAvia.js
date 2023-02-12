import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {createAvia, fetchAvia, fetchTypes} from "../http/AviaApi";
import {observer} from "mobx-react";
import imgStock from '../http/stockPhotos/istockphoto-155380716-612x612.jpg'
import styled from '../styles/addTravel.scss'
import button from "bootstrap/js/src/button";
import {useNavigate} from "react-router-dom";
import {MAIN_ROUTE, SHOP_ROUTE} from "../utils/consts";

const CreateAvia = observer(() => {
    const {avia} = useContext(Context)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [information_from, setInformation_from] = useState('')
    const [information_where, setInformation_where] = useState('')
    const [departure_time, setDeparture_time] = useState('')
    const [path_time, setPath_time] = useState('')
    const [price, setPrice] = useState('')
    const [fileOne, setFileOne] = useState(null)
    const [fileTwo, setFileTwo] = useState(null)
    const [fileThree, setFileThree] = useState(null)
    const [country, setCountry] = useState(null)
    const [countryId, setCountryId] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        fetchTypes().then(data => avia.setTypes(data))
        fetchAvia().then(data => avia.setAvia(data))
    }, [])

    const selectFileOne = (e) => {
        setFileOne(e.target.files[0])
    }

    const selectFileTwo = (e) => {
        setFileTwo(e.target.files[0])
    }

    const selectFileThree = (e) => {
        setFileThree(e.target.files[0])
    }

    const airports = [
        {id: 1, name: 'Шереметьево'},
        {id: 2, name: 'Домодедово'},
        {id: 3, name: 'Внуково'},
        {id: 4, name: 'Жуковский'}
    ]

    const addAvia = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('price', `${price}`)
        formData.append('information_from', information_from)
        formData.append('information_where', country)
        formData.append('departure_time', departure_time)
        formData.append('path_time', path_time)
        formData.append('country', country)
        formData.append('countryIdType', 1)
        formData.append('imgOne', fileOne)
        formData.append('imgTwo', fileTwo)
        formData.append('imgThree', fileThree)
        createAvia(formData)
        // navigate(SHOP_ROUTE)
    }

    console.log(fileOne)
    console.log(fileTwo)
    console.log(fileThree)

    return (
        <div className='container'>
            <div className='grid grid-cols-1 gap-10 mt-10'>
                <label>
                    <span className=''>Введите заголовок <span>*</span></span>
                    <input type="text"
                           value={name}
                           onChange={e => setName(e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    <span>Введите описание <span>*</span></span>
                    <textarea className='textareaDesc' type="text"
                           value={description}
                           onChange={e => setDescription(e.target.value)}
                    />
                </label>
                <label>
                    <span className='block'>Выберите куда <span>*</span> </span>
                    {avia.types.map(types =>
                        <button className='mr-4 mt-6 underline' onClick={() => setCountry(types.name)} key={types.id}>
                            {types.name}
                        </button>)
                    }
                </label>
                <label>
                    <span className='block'>Выберите аэропорт <span>*</span></span>
                    {airports.map(port =>
                        <button className='mr-4 mt-6 underline' key={port.id}
                                onClick={() => setInformation_from(port.name)}>{port.name}</button>
                    )}
                </label>
                <label htmlFor="">
                    <span>Введите цену <span>*</span></span>
                    <input type="text"
                           value={price}
                           onChange={e => setPrice(Number(e.target.value))}
                    />
                </label>
                <label htmlFor="">
                    <span>Введите время отправления<span>*</span></span>
                    <input type="text"
                           value={departure_time}
                           onChange={e => setDeparture_time(e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    <span>Введите время в пути <span>*</span></span>
                    <input type="text"
                           value={path_time}
                           onChange={e => setPath_time(e.target.value)}
                    />
                </label>
                <label className=''>
                    <span className='block'>Фотографии <span>*</span></span>
                    <div className='flex mt-2'>
                        <input className='addPhoto block w-full text-sm text-slate-500
                                  file: mr-4 file:px-4
                                  file:rounded-full file:border-0
                                  file:text-sm file:font-semibold
                                  hover:file:bg-blue-100'
                               type="file" onClick={selectFileOne}/>
                        <input className='addPhoto block w-full text-sm text-slate-500
                                  file: mr-4 file:px-4
                                  file:rounded-full file:border-0
                                  file:text-sm file:font-semibold
                                  hover:file:bg-blue-100'
                               type="file" onClick={selectFileTwo}/>
                        <input className='addPhoto block w-full text-sm text-slate-500
                                  file: mr-4 file:px-4
                                  file:rounded-full file:border-0
                                  file:text-sm file:font-semibold
                                  hover:file:bg-blue-100'
                               type="file" onClick={selectFileThree}/>
                    </div>
                </label>
                <button className='adminAdd' onClick={addAvia}>Добавить</button>
            </div>
        </div>
    );
});

export default CreateAvia;