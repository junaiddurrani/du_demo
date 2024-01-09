import React, { useState, useEffect } from 'react';
import LineBreak from './LineBreak';
import { plansData } from '../PlanData';

const CardList = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={windowWidth <= 640 ? "flex flex-col items-center overflow-y-scroll h-screen" : 'flex overflow-x-scroll h-screen'}>
            {plansData.map((plan) => (

                <div
                    key={plan.id}
                    className={`flex-none ${windowWidth <= 640 ? 'w-full' : 'w-auto'} ${windowWidth <= 640 ? 'h-min' : windowWidth <= 1280 ? 'h-min' : 'h-[66%]'} m-4 bg-white rounded-lg shadow-sm relative border-[1px]`}
                >
                    <div className="absolute left-0 top-0 h-full rounded-l-lg w-2 bg-gradient-to-b from-[#C724B1] via-[#753bbd] to-[#00a9ce]" />
                    <div className="flex flex-col px-6 py-3 sm:py-4 lg:py-4 xl:py-4 2xl:py-4 h-full justify-between">
                        <div className='flex flex-col'>
                            <p className='text-[#C724B1] sm:text-xs lg:text-xs xl:text-xs 2xl:text-xs text-sm'>You Pay</p>
                            <div className='flex items-center'>
                                <p className='text-[#C724B1] sm:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-xl font-bold'>{plan.price}</p>
                                <p className='text-[#C724B1] sm:text-xs lg:text-sm xl:text-sm 2xl:text-sm text-sm pl-1'>{'/month'}</p>
                            </div>
                            <p className='lg:text-xs xl:text-xs 2xl:text-xs text-xs mt-1'>For 12 months + 5% VAT</p>
                            <LineBreak />
                            <div className='flex flex-col'>
                                <p className='text-[#00a9ce] 2xl:text-xs text-xs'>You Get</p>
                                <p className='text-[#00a9ce] sm:text-xs lg:text-xs xl:text-sm 2xl:text-sm text-sm font-bold'>{plan.plan}</p>
                            </div>
                            <LineBreak />
                            <div className='flex items-center'>
                                <p className='text-black sm:text-xs lg:text-xs xl:text-xs 2xl:text-sm text-xl font-bold'>{plan.volume}</p>
                                <p className='text-gray-500 sm:text-xs lg:text-xs xl:text-xs 2xl:text-xs text-sm ml-4'>{plan.id === 0 ? 'National data' : 'Double National data'}</p>
                            </div>
                            <div className='flex items-center'>
                                <p className='text-black sm:text-xs lg:text-xs xl:text-xs 2xl:text-sm text-xl font-bold'>{plan.minutes}</p>
                                <p className='text-gray-500 sm:text-xs lg:text-xs xl:text-xs 2xl:text-xs text-sm ml-4'>Flexi minutes</p>
                            </div>
                            <LineBreak />
                            {
                                plan.content.map((item, index) => {
                                    return (
                                        <div className='flex gap-1' key={index}>
                                            <svg fill="none" viewBox="0 0 15 15" height={windowWidth <= 640 ? "1.5em" : "1em"} width={windowWidth <= 640 ? "2em" : "1em"} >
                                                <path
                                                    fill="#A7A7A7"
                                                    fillRule="evenodd"
                                                    d="M11.39 5.312l-4.318 5.399L3.68 7.884l.64-.768 2.608 2.173 3.682-4.601.78.624z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <p className='sm:text-xs lg:text-xs xl:text-xs 2xl:text-xs text-sm text-slate-500 my-1'>{item}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='flex flex-col'>

                            {
                                plan.id === 0 ? null :
                                    <>
                                        <LineBreak />
                                        <div className='rounded-full w-2/3 text-center py-1 sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs text-sm text-white bg-gradient-to-r from-[#753bbd] to-[#C724B1]'>
                                            Limited time offer
                                        </div>
                                        <div className='flex mt-1 items-center'>
                                            <p className='sm:text-xs lg:text-xs xl:text-xs 2xl:text-xs text-sm font-bold'>The Entertainer</p>
                                            <p className='sm:text-xs lg:text-xs xl:text-xs 2xl:text-xs text-sm ml-1'>on us for 12 months</p>
                                        </div></>
                            }

                            <LineBreak />
                            <div className='flex justify-between items-center'>
                                <p className='flex-1 sm:text-xs lg:text-xs xl:text-xs 2xl:text-xs text-sm text-gray-500 underline font-bold'>What you get</p>
                                <div onClick={() => { alert(plan.price) }} className='flex-1 items-center text-center p-2 border-[1px] rounded-md hover:bg-[#C724B1] hover:text-white text-[#C724B1] cursor-pointer'>
                                    <p className='font-bold sm:text-xs lg:text-xs xl:text-xs 2xl:text-xs text-sm'>Select</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardList;
