import React from 'react'
import Walletsec from './Walletsec'
import CuponSec from './CuponSec'
import Clickhere from './Clickhere'
import PaymentSummary from './PaymentSummary'
import Button from './Button'
import BuyinSec from './BuyinSec'
import Deliver from './Deliver'


const Rightcomponent = () => {
    return (
        <div className='flex-1 m'>
            <div className="shadow-[0_1px_8px_0_rgba(0,0,0,0.08)] rounded-xl p-2">
                <Walletsec />
                <CuponSec />
                <Clickhere />
                <hr className="mt-3 mb-3" />
                <PaymentSummary />
                <Button />
            </div>
            <BuyinSec />
            <Deliver />
        </div>
    )
}

export default Rightcomponent;
