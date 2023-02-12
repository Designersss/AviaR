import React from 'react';
import {Link} from "react-router-dom";
import '../styles/MainStyles.scss'
import photo from '../img/Main/MainPhoto.png'
import servicesImg from '../img/Main/servicesImg.png'
import servicesOne from '../img/Main/61a6cddd01f7c8005a494246_petronas-logo-8 1.png'
import servicesTwo from '../img/Main/Exxon Mobil 1.png'
import servicesThree from '../img/Main/pertamina_logo_WB 1.png'
import servicesFor from '../img/Main/purepng 1.png'
import safety from '../img/Main/Safery.png'
import bgFleet from '../img/Main/fleet/bg.png'
import aviaFleetOne from '../img/Main/fleet/1.png'
import aviaFleetTwo from '../img/Main/fleet/2.png'
import bgOut from '../img/Main/unsplash.png'


function Main(props) {
    return (
        <div>
            <div className='container'>
                <div className='flex justify-between mt-10 max-[1100px]:block'>
                    <div className='txtMain'>
                        <h1>AirMain</h1>
                        <p>Чартерные рейсы мирового класса и рейсы технического обслуживания</p>
                        <p>Наша цель - просто предложить высочайшие стандарты профессионализма и обслуживания,
                            измеряемые нашими показателями безопасности, надежностью отправки и удовлетворенностью
                            клиентов</p>
                        <Link to={'/shop'} className='button'>Бронируй прямо сейчас!</Link>
                    </div>
                    <img src={photo} alt="photo" className='imgMain max-[1100px]:hidden'/>
                </div>
            </div>
            <div className='AboutTravel mt-20'>
                <div className="container">
                    <div className="txtTravel justify-center font-bold">
                        <h2 className='flex justify-center text-lg'>Компании которые воспользовались нашими
                            услугами</h2>
                        <div className='flex justify-between pt-10 max-[1100px]:grid max-[1100px]:grid-cols-2 max-[1100px]:gap-12 max-[520px]:grid-cols-1'>
                            <img className='h-12' src={servicesOne} alt=""/>
                            <img className='h-12' src={servicesTwo} alt=""/>
                            <img className='h-12' src={servicesThree} alt=""/>
                            <img className='h-12' src={servicesFor} alt=""/>
                        </div>
                        <div className='flex pt-10 service max-[1100px]:block'>
                            <img className='imgMain max-[1100px]:hidden' src={servicesImg} alt=""/>
                            <div className='ml-20 max-[1100px]:ml-0'>
                                <p className='text-lg max-[1100px]:flex max-[1100px]:w-full'>AirMain полностью привержена поддержке наших клиентов,
                                    предоставляя безопасные и надежные решения для их потребностей в чартерных
                                    перевозках.</p>
                                <div className='grid grid-cols-3 mt-20 max-[1100px]:grid-cols-2'>
                                    <span className='mt-10 ml-2 underline'>Регулярный чартер</span>
                                    <span className='mt-10 ml-2 underline'>Долгосрочный контракт</span>
                                    <span className='mt-10 ml-2 underline'>Эвакуационный рейс</span>
                                    <span className='mt-10 ml-2 underline'>Управление воздушеым судном</span>
                                    <span className='mt-10 ml-2 underline'>Тоир воздушного судна</span>
                                    <span className='mt-10 ml-2 underline'>Береговая регулярная охрана</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='mt-20'>
                    <h2 className='text-3xl'>Безопасность</h2>
                    <div className='flex justify-between mt-6 max-[1100px]:block'>
                        <div>
                            <p className='text-lg'>Нашим предметом предметом гордости является то, что у нас один из лучших показателей
                                безопасности
                                чартерных рейсов в регионе</p>
                            <div className='grid grid-cols-4 mt-20 max-[1100px]:grid-cols-2'>
                                <span className='mt-10 ml-2 underline'>Отслеживание и мониторинг</span>
                                <span className='mt-10 ml-2 underline'>Точная проверка</span>
                                <span className='mt-10 ml-2 underline'>Международная аккредитация</span>
                                <span className='mt-10 ml-2 underline'>Глобальные перспективы</span>
                                <span className='mt-10 ml-2 underline'>Опытные пилоты и экипаж</span>
                                <span className='mt-10 ml-2 underline'>Личные медицинские учереждения</span>
                                <span className='mt-10 ml-2 underline'>Большой парк воздушного судна</span>
                            </div>
                        </div>
                        <img className='imgMain max-[1100px]:mt-20 max-[1100px]:flex max-[1100px]:mx-auto' src={safety} alt=""/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='mt-20'>
                    <h2 className='text-3xl flex justify-center'>Наши самолеты</h2>
                    <p className='w-96 text-lg flex text-center justify-center m-auto mt-8 max-[1100px]:w-full'>AirMain полностью привержена поддержке наших клиентов, предоставляя безопасные и надежные решения для их потребностей в чартерных перевозках.</p>
                    <div className='flex justify-between mt-20 max-[1100px]:hidden'>
                        <div className='fleet'>
                            <img className='aviaFleet' src={aviaFleetOne} alt=""/>
                            <img className='bg' src={bgFleet} alt=""/>
                            <p className='flex justify-center text-lg mt-8'>CESSNA 208 CARAVAN</p>
                        </div>
                        <div className='fleet'>
                            <img className='aviaFleet' src={aviaFleetTwo} alt=""/>
                            <img className='bg' src={bgFleet} alt=""/>
                            <p className='flex justify-center text-lg mt-8 mb-8'>ATR 72-600</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='contact mt-20'>
                    <p className='max-[800px]:hidden'>Лучшее только у нас</p>
                    <Link className='max-[500px]:relative' to={'/shop'}>Заказывай путевки прямо сейчас</Link>
                    <img src={bgOut} alt=""/>
                </div>
            </div>
            <div className="pt-20">
                <div className="footer">
                    <div className="container">
                        <div className="flex justify-between max-[1100px]:grid max-[1100px]:grid-cols-2 max-[440px]:grid-cols-1">
                            <Link to={'/AirMain'}>
                                <svg width="100" height="100" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.9617 0.0471509C17.9622 -0.180611 20.9678 0.419864 23.643 1.78156C26.3182 3.14325 28.5577 5.21258 30.1116 7.7586C31.6655 10.3046 32.4727 13.2271 32.443 16.2C32.4133 19.1729 31.5479 22.0791 29.9434 24.5943C28.339 27.1095 26.0585 29.1348 23.3567 30.444C20.6548 31.7533 17.6378 32.295 14.6423 32.0088C11.6469 31.7226 8.79092 30.6196 6.39313 28.8231C3.99535 27.0265 2.1501 24.607 1.06334 21.8347C-0.0859267 18.8357 -0.30939 15.5674 0.421199 12.443C1.19535 9.1177 3.02261 6.12288 5.63748 3.89369C8.25236 1.6645 11.5186 0.317057 14.9617 0.0471509V0.0471509ZM14.8583 1.04611C11.2348 1.36045 7.84346 2.94103 5.29369 5.50388C2.74391 8.06673 1.20281 11.4438 0.94729 15.0285C0.691765 18.6131 1.73856 22.1702 3.8996 25.0608C6.06064 27.9514 9.19426 29.9859 12.7375 30.7988C16.2807 31.6118 20.0012 31.1498 23.2305 29.496C26.4599 27.8421 28.9864 25.1048 30.3562 21.7758C31.726 18.4469 31.8492 14.7444 30.7037 11.3338C29.5582 7.92312 27.2191 5.02779 24.1067 3.16798C21.3272 1.51757 18.0879 0.784579 14.8583 1.07528V1.04611Z"
                                        fill="#fff"/>
                                    <path
                                        d="M2.76831 12.1077L4.76855 12.9536L5.44022 12.4432L11.9428 15.3598L11.5 15.7098L8.17855 14.2515L7.86855 14.4848C9.23402 15.214 10.5478 16.1036 12.0757 16.4609C12.6904 16.6054 13.328 16.6276 13.9515 16.5262C14.575 16.4248 15.1718 16.2018 15.7071 15.8702C17.0507 14.9725 18.0978 13.7048 18.7185 12.2244C22.462 11.8711 26.2377 12.0677 29.9228 12.8077L29.1847 13.4859C26.9005 13.0524 24.58 12.8327 22.254 12.8296L21.944 13.3254C24.2143 13.3254 26.4799 13.5304 28.7124 13.9379L28.0407 14.5869C25.8742 14.1977 23.673 14.0291 21.4716 14.0838C21.3388 14.2588 21.2059 14.4265 21.0657 14.5942C23.2467 14.5209 25.4297 14.6601 27.5831 15.0098C27.369 15.2286 27.1402 15.4327 26.9262 15.6515C24.7859 15.3443 22.6196 15.2515 20.4605 15.3744C20.2907 15.5713 20.1135 15.7609 19.9364 15.9504C22.0983 15.7581 24.2755 15.8144 26.4243 16.1182L25.7895 16.8182C23.4601 16.45 21.0767 16.602 18.8145 17.2629C17.9803 17.5492 17.1808 17.9258 16.4305 18.3859C17.5286 19.4745 18.8397 20.3308 20.2838 20.9024C21.7279 21.4741 23.2747 21.7491 24.83 21.7109C24.4831 22.0682 24.0919 22.3963 23.7597 22.7536C19.5711 21.9437 15.5684 20.3817 11.9502 18.1452C9.68541 16.5821 7.33196 15.1481 4.90141 13.8504C4.21498 13.4932 3.48426 13.2161 2.79783 12.8661C2.76831 12.6182 2.77569 12.3629 2.76831 12.1077Z"
                                        fill="#fff"/>
                                </svg>
                            </Link>
                            <div>
                                <h2 className='mb-6'>Компания</h2>
                                <Link to={'/AirMain'} className='mt-2'>Начальная</Link>
                                <Link to={'/shop'} className='mt-2'>Путевки</Link>
                                <Link to={'/AirMain'} className='mt-2'>Сервисы</Link>
                            </div>
                            <div>
                                <h2 className='mb-6'>Все о нас</h2>
                                <p className='mt-2'>Новые открытия</p>
                                <p className='mt-2'>Надежность</p>
                                <p className='mt-2'>Оригинальность</p>
                            </div>
                            <div>
                                <h2 className='mb-6'>Контакты</h2>
                                <p className='mt-2'>Владимир, Добросельская 188Д</p>
                                <p className='mt-2'>airMain@gmail.com</p>
                                <p className='mt-2'>8-800-555-35-35</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;