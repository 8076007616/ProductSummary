import React from 'react';
import './App.css';

export default function PaymentSummary() {
    return (
        <div className="paymentsummary">
            <div className='text-[20px] font-bold leading-8'>Payment Summary</div>
            <div className="w-full">
                <div className="flex justify-between text-[14px] font-medium leading-6">
                    <div>Price</div>
                    <div>₹5999</div>
                </div>
                <div className="flex justify-between text-[14px] font-medium leading-6">
                    <div>Disscount</div>
                    <div className='text-green-600'>-₹299</div>
                </div>
                <div className="flex justify-between text-[14px] font-medium leading-6">
                    <div>Delivery charge</div>
                    <div >₹99</div>
                </div>
                <div className="flex justify-between text-[14px] font-medium leading-6">
                    <div>Coupon</div>
                    <div className='text-green-600'>-₹99</div>
                </div>
                <hr className="my-4" />
                <div className="text-[16px] font-bold flex justify-between leading-6">
                    <div>Total</div>
                    <div>₹5601</div>
                </div>
            </div>


        </div>
    )
}
