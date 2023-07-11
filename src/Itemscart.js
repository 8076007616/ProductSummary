import React from 'react'
import img from './img/itmscard.jpg'
export default function Itemscart() {
    return (
        <div className="flex flex-col items-start rounded-xl p-4 shadow-[0_1px_8px_0_rgba(0,0,0,0.08)]">
            <h1 className="text-[24px] font-bold leading-8">Items in cart</h1>
            <div className="flex flex-col items-start mt-5 gap-5 md:flex-row">
                <img className="w-[144px] h-[72px] shrink-0" src={img} alt="" />
                <div className="flex flex-col items-start ">
                    <h1 className='h-[25px]'>Dropper NEET Material 2022 Edition</h1>
                    <p className='font-bold'>₹699 <s className='font-normal text-[8D9091] text-[#8D9091] text-'>899</s> </p>
                </div>
            </div>
        </div>
    )
}
