import React from 'react'
import frame1 from './img/frame1.png'
import tick from './logos/tick.png'
import { AiOutlineRight, AiFillInfoCircle } from 'react-icons/ai'
import { FiTrendingUp } from 'react-icons/fi';

export default function Recomendedcombos() {
    return (
        <div className="rounded-xl p-4 grid gap-y-5 shadow-[0_1px_8px_0_rgba(0,0,0,0.08)]">
            <h1 className='text-start text-[14px] font-bold leading-[30px]'>PW Recomended Combos</h1>
            <div className="border-2 rounded-lg z-10">
                <div className="lg:flex">
                    <div className="w-full border-r-[2px] border-b-[2px] font-semibold text-center p-2.5 text-[16px] leading-6 text-primary bg-[#F1EFFF] relative">
                        Champion
                        <div className='w-[81px] h-[16px] bg-gradient-to-r from-[#FBA418] to-[#F8CB05] text-[11px] text-center font-bold absolute left-[50%] -top-2 -translate-x-2/4 text-black flex justify-center items-center rounded-b-lg'>Best Value</div>
                    </div>

                    <div className="w-full border-r-[2px] border-b-[2px] text-center p-2.5 text-[16px] leading-6">Topper</div>
                    <div className="w-full border-r-[2px] border-b-[2px] text-center p-2.5 text-[16px] leading-6">Sprint</div>
                    <div className="w-full border-b-[2px] text-center p-2.5 text-[16px] leading-6">Basic</div>
                </div>
                <div className="md:flex  mt-2 justify-between p-4 font-semibold" >
                    <div className="ml-2">4 Items included in the combo</div>
                    <div className="mr-2 text-indigo-500 flex justify-center items-center" ><AiFillInfoCircle /> <span className='px-[2px]'>More Info</span> <AiOutlineRight /> </div>
                </div>
                <div className="text-sm text-start">

                    <div className="ml-5 flex">
                        <img src={tick} alt="tick" />
                        <div className='font-bold leading-5'>Books</div>
                    </div>
                    <li className="ml-5 font-light leading-6 text-[16px]">
                        Arjuna(11th)
                    </li>
                </div>
                <hr className="mt-5 mb-5" />
                <div className="text-sm text-start">
                    <div className="ml-5 flex">
                        <img src={tick} alt="tick" />
                        <div className='font-bold leading-5'>Khjaana</div>
                    </div>
                    <li className="ml-5 font-light leading-6 text-[16px]">
                        Alakh sir's Top rated classes
                    </li>
                </div>
                <hr className="mt-5 mb-5" />
                <div className="text-sm text-start">
                    <div className="ml-5 flex">
                        <img src={tick} alt="tick" />
                        <div className='font-bold leading-5'>Test Series</div>
                    </div>
                    <li className="ml-5 font-light leading-6 text-[16px]">
                        Papers created by expert faculties
                    </li>
                </div>
                <hr className="mt-5 mb-5" />
                <div className="text-sm text-start">
                    <div className="ml-5 flex">
                        <img src={tick} alt="tick" />
                        <div className='font-bold leading-5'>Saarthi</div>
                    </div>
                    <li className="ml-5 font-light leading-6 text-[16px]">
                        Live tacher assistance/chat
                    </li>
                    <li className="ml-5 font-light leading-6 text-[16px]">
                        Created by own planner
                    </li>
                    <li className="ml-5 font-light leading-6 text-[16px]">
                        Doubt solving using Image upload
                    </li>
                    <div className="m-2.5 text-xs">
                        <div className='pl-8 text-[14px] leading-6'>Select duration for saarthi</div>
                        <div className="flex text-center pl-8">
                            <div className='border border-primary text-primary flex flex-col justify-center items-center p-[5px] rounded-md font-semibold bg-[#F1EFFF] mr-2'>3
                                <div className='text-[10px]'>months</div>
                            </div>
                            <div className='border border-primary flex flex-col justify-center items-center p-[5px] rounded-md font-semibold mr-2 text-gray-500'>6
                                <div className='text-[10px]'>months</div>
                            </div>
                            <div className='border border-primary flex flex-col justify-center items-center p-[5px] rounded-md font-semibold mr-2 text-gray-500'>9
                                <div className='text-[10px]'>months</div>
                            </div>
                            <div className='border border-primary flex flex-col justify-center items-center p-[5px] rounded-md font-semibold text-gray-500'>12
                                <div className='text-[10px]'>months</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center align-middle p-1 text-[12px] bg-[#dff1e4] text-[#3F8E58] font-semibold">
                    <FiTrendingUp size={20} /> <span className='pl-2'>80% student bought this combo</span></div>

                <div className=" flex flex-col  text-center  my-2 p-2 lg:flex-row justify-center lg:justify-between lg:items-center ">
                    <div className='flex  font-semibold text-[20px] justify-center'>₹3999
                        <s className="ml-2 font-normal text-gray-500 text-[16px]">8500</s>
                    </div>
                    <div className="bg-[#f1efff] rounded  flex p-[20px] w-[100%] items-center justify-center lg:w-[auto]">
                        <img src={frame1} alt="framebox" />
                        <h1 className="ml-2 text-primary font-semibold text-[16px]">ADD</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}