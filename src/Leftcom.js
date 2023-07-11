import React from 'react'
import Itemscart from './Itemscart'
import Recomendedcombos from './Recomendedcombos'
import Addmoreitems from './Addmoreitems'
export default function Leftcom() {
    return (
        <div className="flex flex-col gap-4" >
            <Itemscart />
            <Recomendedcombos />
            <Addmoreitems />
        </div>
    )
}
