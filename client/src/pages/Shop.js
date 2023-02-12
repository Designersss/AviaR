import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react";
import {Context} from "../index";
import {fetchAvia, fetchTypes} from "../http/AviaApi";
import {Card} from "react-bootstrap";
import AviaItem from "../components/AviaItem";
import {check} from "../http/userApi";
import styled from '../styles/aviaMap.scss'

const Shop = observer(() => {
    const {avia} = useContext(Context)
    const [country, setCountry] = useState('')

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchTypes().then(data => avia.setTypes(data))
        fetchAvia().then(data => avia.setAvia(data))
    }, [])

    useEffect(() => {
        check().then(data => {
            fetchTypes().then(data => avia.setTypes(data))
            fetchAvia().then(data => avia.setAvia(data))
        }).finally(() => setLoading(false))
    }, [])


    console.log(country)

    return (
        <div className='container'>
            {loading
                ?
                <div className='flex items-center justify-center mt-40'>Загрузка!!!!</div>
                :
                <div className='mt-14'>
                    <div className="aviaMap">
                        <h2 className='text-xl max-[1100px]:w-full max-[1100px]:block'>Выберите страну под себя</h2>
                        <Card className='stop max-[1100px]:w-full max-[1100px]:block'>
                            {avia.types.map(type =>
                                <button className='mx-4 my-2' onClick={() => setCountry(type.name)}
                                        key={type.id}>
                                    {type.name}
                                </button>
                            )}
                        </Card>
                    </div>
                    <Card className='stop'>
                        <div className='flex justify-center text-2xl mt-8'>{country}</div>
                        <div className='grid grid-cols-4 gap-10 pt-16 pb-16 max-[1100px]:grid-cols-2 max-[700px]:grid-cols-1'>
                            {avia.avia.map(avia => {
                                    if (avia.country === country){
                                        return <AviaItem key={avia.id} avia={avia}/>
                                    }
                                }
                            )}
                        </div>
                    </Card>
                </div>
            }
        </div>
    );
});

export default Shop;