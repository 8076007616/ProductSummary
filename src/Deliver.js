import React from 'react'
import { BiEdit } from 'react-icons/bi'

const Deliver = () => {
    return (
        <div className="flex flex-col items-start gap-4 rounded-md shadow-[0_1px_8px_0_rgba(0,0,0,0.08)] mt-4 p-4">
            <div className='w-full flex justify-between items-center'>
                <div className='text-[18px] font-semibold '>Deliver to</div>
                <div className='flex bg-[#F1EFFF] px-4 py-2 text-[12px] rounded-md text-primary'>
                    <BiEdit size={18} />
                    <div className='ml-2'>Change</div>
                </div>
            </div>
            <div className='text-[12px] text-gray-400'>
                R-10/D-14, Kavi Nagar, Ghaziabad <br /> Uttar Pradesh, India, Pin-201002
            </div>
        </div>
    )
}

export default Deliver